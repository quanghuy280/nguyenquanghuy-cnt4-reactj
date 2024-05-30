import React from 'react';

export default function NqhListProduct({renderNqhProducts}) {
    
    console.log("List Product:",renderNqhProducts);
    let nqhTong=0;

    let nqhElementProduct = renderNqhProducts.map((nqhProduct,index)=> {
        nqhTong += nqhProduct.nqh_quantity*nqhProduct.nqh_price;
        return(
            <>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{nqhProduct.nqh_productId}</td>
                    <td>{nqhProduct.nqh_productName}</td>
                    <td>{nqhProduct.nqh_quantity}</td>
                    <td>{nqhProduct.nqh_price}</td>
                    <td>{nqhProduct.nqh_quantity*nqhProduct.nqh_price}</td>
                    <td>
                    <button className= 'btn btn-success mx-1 '>
                        <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button className= 'btn btn-danger mx-1 '>
                    <i class="fa-solid fa-trash"></i>
                  </button>
                    </td>   
                </tr>
            </>
        )
    })
        return (
            <div>
                <h2>DANH SÁCH SẢN PHẨM</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>  
                           <th>#</th>
                           <th>Mã sản phẩm</th>
                           <th>Tên sản phẩm</th>
                           <th>Số lượng</th>
                           <th>Đơn giá</th>
                           <th>Thành tiền</th>
                           <th>Chức năng</th>
                        </tr>

                    </thead>
                    <tbody>
                        {nqhElementProduct}
                    </tbody>
                    <tfoot>
          <tr>
            <th colspan={5} className= 'text-end '> Tổng cộng </th>
            <th colspan={3} className= 'text-start '>   
              {nqhTong}
              </th>
          </tr>
        </tfoot>

      </table>
    </div>
  )
}
