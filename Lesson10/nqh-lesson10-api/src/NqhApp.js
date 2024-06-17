
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
    setNqhCategories((prev) => [...prev]);
    setNqhCategoryIsform(false);
  };


  return (
    <div className="container border my-3">
      <h1>NGUYỄN QUANG HUY - CAll Api</h1>
      <NqhCategoryList renderNqhCategories={nqhCategories}
                      onAddNew={nqhHandleAddNew}/>
      <hr/>
      {
          nqhCategoryIsForm===true?<NqhCategoryForm
                                                  onCloseForm={nqhHandleCategoryCloseForm}
                                                  onCategorySubmit={NqhHandleCategorySubmit}/>:""
        } 
    </div>
  );
}


export default NqhApp;
