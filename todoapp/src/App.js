import React, { Component } from 'react';
import './App.css';

import Todos from './components/Todos';

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
        completed: true
      }
    ]
  }


  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
