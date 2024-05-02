import React, { Component } from 'react';

class Nvh_form2 extends Component {
    // 1.
    constructor (props) {
        super(props);
        this.state = {
           course: "Nvh-HTML5"
        }
    }    
    //3. hàm xú lý sự kiện
    NvhHandleChange = (event)=>{
        // cập nhật state
        this.setState({
            course: event.target.value
        })
    }
    //4.
    NvhhandleSubmit = (event)=>{
        event.preventDefault();
        alert(this.state.course)
    }

    render() {
        //2.
        return (
            <div>
                <form onSubmit={this.NvhhandleSubmit}>
                    <label>Course</label>
                    <select value={this.state.course}
                            onChange={this.NvhHandleChange}>
                        <option value={"NvH-HTML5"}>Nvh-HTML5</option>
                        <option value={"NvH-CSS3"}>Nvh-CSS3</option>
                        <option value={"NvH-JS"}>Nvh-JS</option>
                        <option value={"NvH-RJ"}>Nvh-ReactJs</option>
                    </select>
                    <input type='Submit' value={"Submit"} />
                </form>
            </div>
        );
    }
}

export default Nvh_form2;