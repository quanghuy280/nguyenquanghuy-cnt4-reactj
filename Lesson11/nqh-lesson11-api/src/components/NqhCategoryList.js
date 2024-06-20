import React from 'react'

export default function NqhCategoryList({renderNqhCategories, onAddNew, onNqhDelete,onNqhEdit}) {
  console.log("renderNqhCategories: ", renderNqhCategories );
  let nqhCategoryElement = renderNqhCategories.map((nqhCategory,Index)=>{
      return(
          <tr key= {Index}>
              <th>{Index+1}</th>
              <td>{nqhCategory.nqhId}</td>
              <td>{nqhCategory.nqhCategoryName}</td>
              <td>{nqhCategory.nqhCategoryStatus===true?'Hiển thị':'Tạm khóa'}</td>
              <td>
                  <button className='btn btn-danger' 
                  onClick={()=>nqhHandleDelete(nqhCategory.nqhId)}>
                  Delete
                  </button>
                  <button className='btn btn-success'
                       onClick={()=>nqhHandleEdit(nqhCategory)}>
                    Edit
                  </button>
              </td>
          
          </tr>
      )
  })

  const nqhHandleAdd = ()=> {
      onAddNew(true);
  }

  // Hàm xử lý sự kiện xóa
  const nqhHandleDelete = (nqhId)=>{
    
    if(window.confirm('Bạn có thực sự muốn xóa Category có mã ['+nqhId+'] Không?')){
        console.log("Delete:",nqhId);
        onNqhDelete(nqhId)
    }else{

    }
    
  }
  // Xử kiện cho nút sửa 
  const nqhHandleEdit = (nqhCategory)=>{
    onNqhEdit(nqhCategory);
  }
return (
  <div className='container m-2'>
      <h2>Danh sách loại sản phẩm</h2>
      <table className='table table-bordered'>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Mã Loại</th>
                  <th>Tên Loại </th>
                  <th>Trạng thái </th>
                  <th>Chức Năng</th>
              </tr>
          </thead>
          <tbody>
          {nqhCategoryElement}
          </tbody>
      </table>
    <button className='btn btn-primary' onClick={nqhHandleAdd}>Thêm mới </button>
  </div>
)
}