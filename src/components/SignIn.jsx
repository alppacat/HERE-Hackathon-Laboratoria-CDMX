import React, { Component } from "react";
import { Button } from "react-materialize";
import Imagen from "../assets/aa.png";
// import {Link} from 'react-router-dom'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.user = React.createRef();
    this.password = React.createRef();
  }

  signIn = () => {
		const u = {
			user:this.user.current.value,
			password:this.password.current.value
    };
		this.props.login(u.user, u.password);
	};

  render() {
    const { user, password } = this;
    return (
      <section className="login-section">
        <img className="school" src={Imagen} alt = 'school-logo'/>
        <div className="form">
          <input className="col s3 offset-s1" type="email" placeholder="correo electrónico" ref = {user}/>
          <input className="col s3" type="password" placeholder="contraseña" ref = {password}/>
          <Button waves="light"onClick={this.signIn}>
            Inicia sesión
          </Button>
          <p>¿Olvidaste tu contraseña?</p>
        </div>
      </section>
    );
  }
};

export default SignIn;
