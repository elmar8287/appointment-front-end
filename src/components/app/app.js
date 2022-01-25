import React, { Component } from 'react';
import Landing from '../landing/landing';
import Login from '../login/login';

export default class App extends Component {
  render () {
    return (
      <div>
        <Landing />
        <Login />
      </div>
    );
  };
};
