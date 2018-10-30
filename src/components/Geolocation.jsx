import React, {Component} from 'react';
import { logout } from '../config/firebase';

import { UrlRutes } from '../config/urls';


class Geolocation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '0,0',
			error: null,
			url: null
		}
	}
	componentWillMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const url = UrlRutes(position.coords.latitude, position.coords.longitude);
					this.setState({
						url,
						value: position.coords.latitude + ',' + position.coords.longitude,
						error: null,
					});
				},
				(error) => this.setState(
					{error: error.message}
				)
			);
		}
	}
	
	offSesion = () => {
		logout();
		
	  }
	render(){
		return(
			<section>
				<div className="row">
					<div className="col s10 m6 offset-s1">
						<div className="card">
						<div className="card-image" widht='250' heigth ='300'>
							<span className="indigo-text text-darken-4">Tu Ruta Actual</span>
							<img src={this.state.url} alt='mapa-actual' />
						</div>
						</div>
					</div>
				</div>
			</section>
		)
	}

}
export default Geolocation;