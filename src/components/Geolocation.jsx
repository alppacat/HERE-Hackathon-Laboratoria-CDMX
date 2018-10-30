import React, {Component} from 'react';
import { logout } from '../config/firebase';

import Button from './Button';


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
					this.funcionFetch(position.coords.latitude, position.coords.longitude);
					this.setState({
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

	funcionFetch = (lat, lng) => {
		const url= `https://image.maps.api.here.com/mia/1.6/routing?app_id=F2NFi480TAeaCU2fjGmC&app_code=DvU41ZrLHlIVBDtOruPEqg&waypoint0=${lat},${lng}&waypoint1=19.451,-99.166&poix0=19.452,-99.16498910000001;00a3f2;00a3f2;11;.&poix1=19.452,-99.16498910000001;white;white;11;.&lc=1652B4&lw=6&t=0&ppi=320&w=250&h=300`;
		this.setState({
			url
		})
		return url;
	}

	changeLocation (event) {
		this.setState({
			value: event.target.value
		})
	}
	
	offSesion = () => {
		logout();
		
	  }
	render(){
		return(
			<React.Fragment>
				<Button logout={this.offSesion}/>
				<input className='input-geo' value={this.state.value} onChange={event=>this.changeLocation(event)}/>
				<img src = {this.state.url} alt='map'/>
			</React.Fragment>
		)
	}

}
export default Geolocation;