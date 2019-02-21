import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/header';
import AddTodo from './components/addTodo';
import uuid from 'uuid';
import about from './components/pages/about';
import axios from 'axios';
class App extends Component {
  state = {
    todos : []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {
      this.setState({todos:res.data})
    })
  }
  // toggle complete
  markComplete = (id) => {
    this.setState({todos : this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }
  deleteItem = (id) => {
    this.setState((preState)=> ({
      todos : preState.todos.filter(todo =>id !==todo.id)
  }))
  }

  // deleteItem = (id) => {
  //   this.setState({todos: [...this.state.todos.filter(todo=> todo.id !==id)]});
  // }
  addTodo = (title) => {
    // console.log(title)
    const newTodos = {
      id : uuid.v4(),
      title,
      completed : false
    }
    this.setState({todos:[...this.state.todos,newTodos]})
  }

  render() {
    // console.log(this.state)
    return (
     <Router>
         <div className="App">
        <div className="container">
         <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete}
            deleteItem={this.deleteItem}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={about}/>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
