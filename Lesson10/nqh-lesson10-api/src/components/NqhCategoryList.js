import React from 'react'

export default function NqhCategoryList({renderNqhCategories,onAddNew }) {
  console.log("renderNqhCategories: ", renderNqhCategories );
  let nqhCategoryElement = renderNqhCategories.map((nqhCategory,Index)=>{
      return(
          <tr key= {Index}>
              <th>{Index+1}</th>
              <td>{nqhCategory.nqhId}</td>
              <td>{nqhCategory.nqhCategoryName}</td>
              <td>{nqhCategory.nqhCategoryStatus===true?'Hiển thị':'Tạm khóa'}</td>
          
          </tr>
      )
  })

  const nqhHandleAdd = ()=> {
      onAddNew(true);
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