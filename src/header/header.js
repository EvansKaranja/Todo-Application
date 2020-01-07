import React, { Component } from 'react';

class Header extends Component {
    state = { title:'' }
    handleOnchange =(e)=>this.setState({[e.target.name]:e.target.value})
    submitForm=(e)=>{
        e.preventDefault()
       if(this.state.title){
        this.props.addTodo(this.state.title)
        this.setState({title:''})}
    }
    render() { 
        return ( 
            <div>
                <div id="myDIV" className="header">
  <h2>My To Do List</h2>
 <form onSubmit={this.submitForm}>
 <input type="text" id="myinput" name="title" value={this.state.title} onChange={this.handleOnchange}placeholder="Title..."/>
  <input className="addBtn" type="submit" name="Add"/>
 </form>
</div>
            </div>
   
         );
    }
}
 
export default Header;