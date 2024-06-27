import React from 'react'

export default function NqhListUsers({renderNqhListUsers}) {
    console.log("NqhListUsers:",renderNqhListUsers);
    // Hiener thị dữ Liệu 
    let nqhElementUsers = renderNqhListUsers.map((nqhUser,index)=> {
        return(
            <>
                <tr>
                    <td>{nqhUser.id}</td>
                    <td>{nqhUser.UserName}</td>
                    <td>{nqhUser.PassWord}</td>
                    <td>{nqhUser.Email}</td>
                    <td>{nqhUser.Phone}</td>
                    <td>...</td>
                </tr>
            </>
        )
    })
  return (
    <div className='row'>
          <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>UserName</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nqhElementUsers}
                    </tbody>
                </table>
            </div>
        </div >
    )
}