import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";


//Import Components

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

/* //ROUTER TEST
const NewRoute = () => {
    return (
      <div>
        <p> New Route Test </p>
      </div>
    );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/new" component={NewRoute} />
      </BrowserRouter>
    );
  }
}
*/ //ROUTER TEST

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      </div>
      </BrowserRouter> 
    );
  }
}

export default App;
