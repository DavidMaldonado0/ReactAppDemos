import React, { Component } from 'react';
import axios from "axios";
import './App.css';

//https://api.github.com/users/john

import UserForm from "./components/UserForm";

class App extends Component {

  state = {
    repos:null
  }

  GetUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        this.setState({ repos });
      })
  } else return;
}
  render() {  
    return (
      <div className="App">
        <header className="App-header">
        <h1> HTTP CALLS IN REACT</h1>
        </header>
        <p>Enter a GitHub username and receive the number of repositories this user have:</p>
        <UserForm GetUser={this.GetUser}/>
        { this.state.repos ? <p>Number of repos: { this.state.repos }</p> :
        <p>Please enter a username</p>}
        <footer>BY DAVID MALDONADO</footer>
      </div>
      //<>
    );
  }
}

export default App;
