import React, { Component } from 'react';

import { initSesion, auth } from './config/firebase';

import Home from './components/Home'; 
import Calendar from './components/Calendar';
import Geolocation from './components/Geolocation';
import SignIn from './components/SignIn';
import AddNewRute from './components/AddNewR';


import './App.css';
import Button from './components/Button';

class App extends Component {
  constructor () {
		super()
		this.state = {
		  uid: null,
		}
	}

  componentWillMount () {
    auth.onAuthStateChanged(user => {
			// console.log(user.uid);
      this.setState({
        uid: user.uid
      })
    })
  }
  onSesion = (email, password) => {
    initSesion(email, password);
  };

  render() {
    const {uid} = this.state;
    if(uid) {
      return (
        <div className="App">
        <Home/>
          <Geolocation/>
          <Calendar/>
          <AddNewRute/>
          
        </div>
      );
    } else {
      return (
      <div className="App">
        <SignIn login= {this.onSesion}/>
      </div>
      )
    }
  }
}

export default App;
