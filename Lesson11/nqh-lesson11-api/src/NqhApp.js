
import { useState, useEffect } from 'react';
import './NqhApp.js';
//import api
import axios from './api/NqhApi';
import NqhCategoryList from './components/NqhCategoryList.js';
import NqhCategoryForm from './components/NqhCategoryForm.js';

function NqhApp() {
/// lấy dữu liệu từ api
const [nqhCategories, setNqhCategories] = useState([]);

const getCategories = async () => {
  try {
    const nqhCateResponse = await axios.get("NqhCategory");
    setNqhCategories(nqhCateResponse.data);
  } catch (error) {
    console.log("lỗi:", error);
  }
}
  useEffect(() => {
    getCategories();
    console.log("nqhCategories:", nqhCategories);
  }, [])

  // trạng thái form
  const [nqhCategoryIsForm, setNqhCategoryIsform]= useState(false);
  //Dữ liệu form: add / edit
  const [nqhCategoryEdit, setNqhCategoryEdit]= useState("");
  const nqhHandleAddNew = (param )=>{
    setNqhCategoryIsform(param);
  }
  const nqhHandleCategoryCloseForm=(param)=>{
    setNqhCategoryIsform(param);
  }

  const NqhHandleCategorySubmit = (param) => {
    let lastId = parseInt(nqhCategories[nqhCategories.length - 1].nqhId, 10);
    console.log("Mã ", lastId);
    param.nqhId = lastId + 1;
    nqhCategories.push(param);
    setNqhCategories((prev)=>{
      return [...prev];
    })
    setNqhCategoryIsform(false);
  }
  // Hàm xử lý sự kiện xóa một đối tượng Category
  const nqhHandleDelete = (nqhId)=>{
    console.log("App-Delete-nqh:",nqhId);
    // Xóa trên api
    // const nqhResponse =  axios.delete(`https://667067110900b5f8724a855a.mockapi.io/nqhApi/nqhV1/NqhCategory/${nqhId}`);
    const nqhResponse =  axios.delete(`NqhCategory/${nqhId}`);
    console.log("NqhResponse-Delete",nqhResponse);
    let nqhDelete = nqhCategories.filter(x=>x.nqhId !== nqhId);
    setNqhCategories(nqhCategories);
    console.log("Delete:",nqhDelete);
  }

  // Sửa category
  const nqhHandleEdit = (nqhCategory)=>{
    setNqhCategoryEdit(nqhCategory)
    setNqhCategoryIsform(true);
  }
  return (
    <div className="container border my-3">
      <h1>NGUYỄN QUANG HUY - CAll Api</h1>
      <NqhCategoryList renderNqhCategories={nqhCategories}
                      onAddNew={nqhHandleAddNew}
                      onNqhDelete={nqhHandleDelete}
                      onNqhEdit={nqhHandleEdit}/>              
      <hr/>
      {
          nqhCategoryIsForm===true?<NqhCategoryForm
                                    renderNqhCategory = {nqhCategoryEdit}
                                    onCloseForm={nqhHandleCategoryCloseForm}
                                    onCategorySubmit={NqhHandleCategorySubmit}/>:""
        } 
    </div>
  );
}


export default NqhApp;
