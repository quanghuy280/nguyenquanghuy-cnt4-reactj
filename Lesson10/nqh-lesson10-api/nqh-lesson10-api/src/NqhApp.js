
import './App.css';
import NqhListUsers from './components/NqhListUsers';
import axios from './api/NqhApi'
import {useEffect,useState} from 'react';



function NqhApp() {

  const [nqhListUsers,setNqhListUsers] = useState([]);
  // Đọc dữ liệu từ api
  const nqhGetAllUsers = async ()=>{
    const nqhResponse = await axios.get("nqhUsers");
    console.log("Api Data:",nqhResponse.data)
    setNqhListUsers()
  }

  useEffect(()=>{
    nqhGetAllUsers();
    console.log("State Data:",nqhListUsers);
  },[])


  return (
    <div className="container border my-3">
       <h1>Làm việc với MockApi</h1>
       <hr/>
       <NqhListUsers renderNqhListUsers={nqhListUsers}/>
    </div>

  );
}

export default NqhApp;
