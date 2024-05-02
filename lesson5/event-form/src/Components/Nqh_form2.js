import React, { Component } from 'react';

class Nqh_form2 extends Component {
    // 1.
    constructor (props) {
        super(props);
        this.state = {
           course: "Nqh-HTML5"
        }
    }    
    //3. hàm xú lý sự kiện
    NqhHandleChange = (event)=>{
        // cập nhật state
        this.setState({
            course: event.target.value
        })
    }
    //4.
    NqhhandleSubmit = (event)=>{
        event.preventDefault();
        alert(this.state.course)
    }

    render() {
        //2.
        return (
            <div>
                <form onSubmit={this.NqhhandleSubmit}>
                    <label>Course</label>
                    <select value={this.state.course}
                            onChange={this.NqhHandleChange}>
                        <option value={"Nqh-HTML5"}>Nqh-HTML5</option>
                        <option value={"Nqh-CSS3"}>Nqh-CSS3</option>
                        <option value={"Nqh-JS"}>Nqh-JS</option>
                        <option value={"Nqh-RJ"}>Nqh-ReactJs</option>
                    </select>
                    <input type='Submit' value={"Submit"} />
                </form>
            </div>
        );
    }
}

export default Nqh_form2;
