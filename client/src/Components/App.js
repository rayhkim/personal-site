import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route component={ Body } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
