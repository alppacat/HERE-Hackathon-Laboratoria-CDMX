import React, { Component } from 'react';
import Geolocation from './components/Geolocation';
import './App.css';
import SignIn from './components/SignIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        <SignIn/>
        <Geolocation/>
      </div>
    );
  }
}

export default App;
