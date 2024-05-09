import React, { Component } from 'react';
import NqhProductList from './component/NqhProductList.js';
import NqhProductAdd from './component/NqhProductAdd.js';
class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      products : [
        { title: "Nguyễn Quang Huy", id: 2210900105 , status:1 },
        { title: "Cabbage", id: 1 , status:1},
        { title: "Garlic", id: 2 , status:0},
        { title: "Apple", id: 3 , status:0},
        { title: "Mango", id: 4 , status:1},
      ]
    }
  }
  NqhHandleSubmit = (param)=> {
    console.log("App: ",param);
    // thêm vào product
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
    render() {
      return (
        <div className='container border mt-5 '>
            <h1>Nguyễn Quang Huy - Render Event Form</h1>
            <hr/>
            <NqhProductList renderProducts={this.state.products}/>
            <hr/>
            <NqhProductAdd onSubmit =  {this.NqhHandleSubmit} />


            </div>
          );
        }
   }


export default App;