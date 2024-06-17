import {React,useState} from 'react'
import axios from '../api/NqhApi';
export default function NqhCategoryFormNqhCategoryForm({onCloseForm, onCategorySubmit}) {

    /// State
    const [nqhCategoryName,setNqhCategoryName]= useState("");
    const [nqhCategoryStatus,setNqhCategoryStatus]= useState(true);
  
    const nqhHandleClose = ()=>{
      onCloseForm(false);
    }
    const nqhHandleSubmit = async (event )=>{
      event.preventDefault();
      let nqhCategory={
        nqhId:0,
        nqhCategoryName:nqhCategoryName,
        nqhCategoryStatus:nqhCategoryStatus,
      }
      console.log("nqhCategory",nqhCategory)
      await axios.post("NqhCategory",nqhCategory);
      onCategorySubmit(nqhCategory);
    }
    return (
      <div>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Category Name </span>
            <input type="text" className="form-control"
              name="nqhCategoryName"
              value={nqhCategoryName}
              onChange={(ev)=>setNqhCategoryName(ev.target.value)}
              placeholder="Category Name" aria-label="Category Name"
                aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">Category Status </span>
            <select className="form-control"
              name="nqhCategoryStatus"
              value={nqhCategoryStatus}>
              onChange={(ev)=>setNqhCategoryStatus(ev.target.value)}
              <option value={true}>Hiển thị</option>
              <option value={false}>Tạm khóa</option>
              </select>        
          </div>
          <button className='btn btn-success' onClick={nqhHandleSubmit}>Ghi lại</button>
          <button className='btn btn-danger' onClick={nqhHandleClose}>Đóng</button>
        </form>
  
      </div>
    )
  }