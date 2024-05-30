import './App.css';
import { React, useState } from 'react';
import NqhListProduct from './components/NqhListProduct';
import NqhProductAddOrEdit from './components/NqhProductAddOrEdit';


function NqhApp() {
 /// mock data
const nqh_Products = [
  {
      nqh_productId:"2210900105"      
     ,nqh_productName:"Nguyễn Quang Huy"      
     ,nqh_quantity:15       
     ,nqh_price:1000
  },
  {
        nqh_productId:"P002"
      , nqh_productName:"IPhone 12"
      , nqh_quantity:20
      , nqh_price:1250
  },
  {
      nqh_productId:"P003"
      , nqh_productName:"IPhone 13"
      ,  nqh_quantity:10
      , nqh_price:1500
  },
]


/// sử dụng hàm hook 
const [nqhListProduct, setnNqhListProduct] = useState(nqh_Products)
const NqhHandleSubmit= (nqhProduct)=>{
  console.log("AddOrEdit:",nqhProduct)
  /// thêm vào nqhlistproduct
  setnNqhListProduct((NqhPrev) =>{
    return [
      ...NqhPrev,
      nqhProduct
    ]
  })
}
  return (
    <div className="container border mt-5 p-3 ">
      <h1 className= "text-center my-3">
        Xử lý chức năng CRUD - Hook</h1>
      <hr/>
      <NqhListProduct renderNqhProducts = {nqhListProduct}/>
      <NqhProductAddOrEdit NqhOnSubmit={NqhHandleSubmit}/>
      
    </div>
  );
}

export default NqhApp;