import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/layout/AddTodo'
import About from './components/pages/About';
import uuid from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Learn JavaScript',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Learn C++',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Learn Java',
        completed: false
      }
    ]
  }

  //AXIOS 
  /*
   state = {
    todos: [ ]
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }) )
  }

  */

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

  
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
     this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
