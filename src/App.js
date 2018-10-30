import React, { Component } from 'react';
import { initSesion, auth } from './config/firebase';
import Geolocation from './components/Geolocation';
import './App.css';
import SignIn from './components/SignIn';

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
          <Geolocation/>
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
