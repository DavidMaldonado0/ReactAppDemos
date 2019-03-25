import React, { Component } from 'react';
import './App.css';

import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/layout/AddTodo'

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Learn JavaScript',
        completed: false
      },
      {
        id: 2,
        title: 'Learn C++',
        completed: false
      },
      {
        id: 3,
        title: 'Learn Java',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => 
      todo.id !== id)] });
  }


  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
