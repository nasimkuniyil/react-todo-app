import React,{Component} from "react";
import './TodoForm.css'
import {v4 as uuidv4} from 'uuid'

class TodoForm extends Component{

    state = {
        value : ""
    }

    onHandleChange = (event) => {
        this.setState({
            value : event.target.value
        })
    }

    onSubmitInput = (event) =>{
        event.preventDefault();

        let {value} = this.state;

        if(value === "") return
        
        this.props.addItems({id:uuidv4(),value:value,isCompleted:false})
        
        this.setState({
            value : ""
        })
    }
    
    
    render(){
        return(
            <form id="form-container" onSubmit={this.onSubmitInput}>
                <input type="text" id="inputField" onChange={this.onHandleChange} value={this.state.value} autoComplete="off" placeholder="Enter todo item..."/>
                <input type="submit" id="submitBtn" value="Add item" />
            </form>
        )
    }
}

export default TodoForm;