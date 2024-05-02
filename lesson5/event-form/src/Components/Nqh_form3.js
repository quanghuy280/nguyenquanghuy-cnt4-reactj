import React, { Component } from 'react';

class Nqh_form3 extends Component {
    constructor (props){
        super (props);
        this.state = {
            studentName: "Nguyễn Quang Huy",
            age: "21",
            course: "Nqh-HTML5",
            gender:true
        }
    }    

    NqhHandleChange = (event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
            [name]: value
    })
    }
    NqhHandleSubmit = (event)=>{
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
                                onChange={this.NqhHandleChange }/>
                    </div>
                    <div>
                    <label>Age: </label>
                        <input name='age'
                                value={this.state.age}
                                onChange={this.NqhHandleChange }/>
                    </div>
                    <div onChange={this.NqhHandleChange }>
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
                            onChange={this.NqhHandleChange}>
                        <option value={"Nqh-HTML5"}>Nqh-HTML5</option>
                        <option value={"Nqh-CSS3"}>Nqh-CSS3</option>
                        <option value={"Nqh-JS"}>Nqh-JS</option>
                        <option value={"Nqh-RJ"}>Nqh-ReactJs</option>
                    </select>
                    </div>
                    <button onClick={this.NqhHandleChange}> Submit </button>
                </form>

            </div>
        );
    }
}

export default Nqh_form3;
