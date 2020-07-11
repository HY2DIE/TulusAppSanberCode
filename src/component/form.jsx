import React from 'react';
import { Component } from 'react';




class Form extends Component{
    constructor(props){
        super(props);
         this.state={
            form:{
                title:'',
                comment:''
            }
        }
    }
   
    
    
    _handleChange=(event)=>{
        let formNew = {...this.state.form}
        formNew[event.target.id] = event.target.value;
    
        this.setState({
            form : formNew
        })
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.form)
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p>Title</p>
                <input id="title" type="text" placeholder='Title' onChange={this._handleChange}/>
                <p>Comment</p>
                <textarea  id="comment" cols="30" rows="10" placeholder='Comment...'  onChange={this._handleChange}></textarea>
                <br/> 
                <button type="submit">Submit</button>
            </form>
        )
    }
  
}

export default Form;