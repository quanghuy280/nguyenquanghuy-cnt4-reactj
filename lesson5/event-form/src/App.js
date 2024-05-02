import React, { Component } from 'react';
import Nqh_form1 from './Components/Nqh_form1';
import Nqh_form2 from './Components/Nqh_form2';
import Nqh_form3 from './Components/Nqh_form3';

class App extends Component {
  NqhSubmit = (param)=>{
    console.log("App",param);
  }
    
  render() {
    return (
      <div>
        <h1>Controlled Component Reactj Form</h1>
        <Nqh_form1 />
        <Nqh_form2 />
        <hr />
        <Nqh_form3 onSubmit={this.NqhSubmit}/>
      </div>
    );
  }
}

export default App;
