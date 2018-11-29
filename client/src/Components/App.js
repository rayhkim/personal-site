import React, { Component } from 'react';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route component={ NavBar } />
          <Route component={ Home } exact path="/"/>
          <Route component={ About } path="/about" exact/>
          <Route component={ Projects } path="/projects" exact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
