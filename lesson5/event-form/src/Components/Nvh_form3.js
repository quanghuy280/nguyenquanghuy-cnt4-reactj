import React, { Component } from 'react';

class Nvh_form3 extends Component {
    constructor (props){
        super (props);
        this.state = {
            studentName: "Nguyễn Văn Hiếu",
            age: "21",
            course: "Nvh-HTML5",
            gender:true
        }
    }    

    NvhHandleChange = (event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
            [name]: value
    })
    }
    NvhHandleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state);
        ///chuyển đổi dữ liệu lên app
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Student Name: </label>
                        <input name='studentName'
                                value={this.state.studentName}
                                onChange={this.NvhHandleChange }/>
                    </div>
                    <div>
                    <label>Age: </label>
                        <input name='age'
                                value={this.state.age}
                                onChange={this.NvhHandleChange }/>
                    </div>
                    <div onChange={this.NvhHandleChange }>
                        <label>Gender:</label>
                        <input type='radio' id='rdNam' name='gender' value={true}
                            defaultChecked={this.state.gender===true} />
                            <label htmlFor='rdNam'>Nam</label>
                        <input type='radio' id='rdNu'  name='gender' value={false}
                            defaultChecked={this.state.gender===false} />
                            <label htmlFor='rdNu'>Nữ</label>
                    </div>
                    <div>
                    <label>Course</label>
                    <select value={this.state.course}
                            onChange={this.NvhHandleChange}>
                        <option value={"NvH-HTML5"}>Nvh-HTML5</option>
                        <option value={"NvH-CSS3"}>Nvh-CSS3</option>
                        <option value={"NvH-JS"}>Nvh-JS</option>
                        <option value={"NvH-RJ"}>Nvh-ReactJs</option>
                    </select>
                    </div>
                    <button onClick={this.NvhHandleChange}> Submit </button>
                </form>

            </div>
        );
    }
}

export default Nvh_form3;