import React, { Component } from 'react';
import Geolocation from './components/Geolocation';
import './App.css';
import SignIn from './components/SignIn';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        <SignIn/>
        <Geolocation/>
        <Home/>
      </div>
    );
  }
}

export default App;
