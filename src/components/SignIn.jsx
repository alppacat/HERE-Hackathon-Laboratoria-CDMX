import React, { Component } from "react";
import { Button, Input } from "react-materialize";
import Imagen from "../assets/school.png";
// import {Link} from 'react-router-dom'

class SignIn extends Component {
  constructor(props){
    super()
    this.state = {
      userName: null,
      userId: null
    }
  }

  
  render () {
    return (
      <React.Fragment>
        <img className="school" src={Imagen} alt = 'school'/>
        <div className="form">
          <Input className="col s3 offset-s1" type="email" label="Email" />
          <Input className="col s3" type="password" label="password" />
          <Button waves="light">
            Login
          </Button>
          <p>¿Olvidaste tu contraseña?</p>
        </div>
      </React.Fragment>
    );
  }
};

export default SignIn;
