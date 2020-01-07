import React, { Component } from 'react';


class Todoitem extends Component {
    state = {  }

    render() { 
        const mystle = {
            cursor: "pointer",
        position: "relative",
        padding: "12px 8px 15px 0px",
        background: "#eee",
        fontSize: "18px",
        textDecoration: this.props.todo.completed?"line-through":'none'
        }
      
        return (  
            <div>
                <ul><li style={mystle}> <span><input onChange={this.props.markComplete.bind(this,this.props.todo.id)}type="checkbox"/></span>
                {this.props.todo.title} <span onClick={this.props.handleDelete.bind(this,this.props.todo.id)} style={{ position:'absolute',fontSize:'20px',paddingTop:'2px',right:'0' ,borderRadius:'100%',backgroundColor:'red',padding:'5px', margin:"2px"}}>x</span></li> </ul>
            </div>
        );
    }



}

export default Todoitem;
