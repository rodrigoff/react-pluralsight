import React from 'react';
import './App.css';

import Header from './_common/Header';

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './courses/CoursesPage';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/courses' component={CoursesPage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
