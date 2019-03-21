import React, { Component } from 'react';
import './App.css';

import ToDos from './components/ToDos';

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
      },
    ]
  }


  render() {
    return (
      <div className="App">
        <ToDos />
      </div>
    );
  }
}

export default App;
