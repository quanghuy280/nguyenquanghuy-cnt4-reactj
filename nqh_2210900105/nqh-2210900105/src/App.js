import React, { Component } from 'react';
import Nqh_Products from './component/nqh-Products.js';

class App extends Component {
    constructor (props){
        super(props);
        this.state = {
            Products: [
                {
                    nqh_productId:"msv"      
       ,nqh_productName:"họ và tên sinh viên"      
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

                }

            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Nguyễn Quang Huy</h1>
                <hr/>
                <nqh_Products/>
            </div>
        );
    }
}

export default App;