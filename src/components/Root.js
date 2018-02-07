import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App';

class Root extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  }
}

export default Root;