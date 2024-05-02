import React, { Component } from 'react';
import Nvh_form1 from './Components/nvh_form1';
import Nvh_form2 from './Components/Nvh_form2';
import Nvh_form3 from './Components/Nvh_form3';

class App extends Component {
  NvhSubmit = (param)=>{
    console.log("App",param);
  }
    
  render() {
    return (
      <div>
        <h1>Controlled Component Reactj Form</h1>
        <Nvh_form1 />
        <Nvh_form2 />
        <hr />
        <Nvh_form3 onSubmit={this.NvhSubmit}/>
      </div>
    );
  }
}

export default App;