import './App.css';
import { React, useEffect,useState } from 'react'
import axios from 'axios';
import NqhStudentList from './components/NqhStudentList';

function NqhApp() {
 
  // sử dụng hàm UseState của hook 
  Const [nqhStudenList, setNqhSudenList]=useState([]);
  // Get data from api
  const nqhGetSudent = async () => {
    try {
      const response = await axios.get("https://666a99287013419182cffaf0.mockapi.io/api/nqhv1/nqhStudent");
      'setNqhSudenListData'(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    nqhGetSudent();
  }, []);
  return (
    <div className="container border mt-5 p-3 ">
      <h1 className= "text-center my-3"> Xử lý chức năng CRUD - Hook -API</h1>
      <hr/>
      <NqhStudentList renderNqhStudentList = {nqhStudentList} />
    </div>
  );
}

export default NqhApp;