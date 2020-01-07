import React, { Component } from 'react';
import Todo from './todoitem'

class todos extends Component {
    state = {  }
    render() { 
        return ( <div>
           {this.props.todos.map((todo)=>{
                return <Todo key={todo.id} todo={todo} markComplete={this.props.markComplete} handleDelete={this.props.handleDelete}/>
            })}
            
        </div> );
    }
}
 
export default todos;