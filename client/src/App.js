import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Room from './components/rooms/rooms';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Room />
      </header>
    </div>
  );
}
  }
  

export default App;
