import React, { Component } from 'react';
import axios from 'axios'
import Todo from './todo/Todo'
import "./app.css"
import Header from "./header/header"

class App extends Component {

state = {
  todos:[
    // {
    //   id:1,
    //   title:"Meeting Boss",
    //   completed:false
    // },
    // {
    //   id:2,
    //   title:"Having dinner with wife",
    //   completed:false
    // },
    // {
    //   id:3,
    //   title:"Doing assignment",
    //   completed:false
    // }
  ]

}
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.setState({todos:res.data}))
}
addTodo = (title)=>{
axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false}).then(res=>this.setState({todos:[...this.state.todos,res.data]}))
  

}
handleDelete =(id)=>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>  this.setState({todos:[...this.state.todos.filter(todo=>{
    return todo.id !==id
      })]}))

}
markComplete = (id)=>{
  this.setState({todos:this.state.todos.map(todo=>{
    if(todo.id === id){
      todo.completed=!todo.completed
    }
    return todo
  })})
}

  render() {

    return (
      <div>
        <Header addTodo={this.addTodo}/>
      <Todo todos={this.state.todos} markComplete={this.markComplete} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
