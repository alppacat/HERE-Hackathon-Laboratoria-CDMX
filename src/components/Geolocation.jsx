import React, {Component} from 'react';


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

	// changeLocation (event) {
	// 	this.setState({
	// 		value: event.target.value
	// 	})
	// }
	
	
	render(){
		return(
			<React.Fragment>
				<h4 align="left">Tu ruta de hoy :</h4>
				{/* <input className='input-geo' value={this.state.value} onChange={event=>this.changeLocation(event)}/> */}
				<img src = {this.state.url} alt='map'/>
			</React.Fragment>
		)
	}

}
export default Geolocation;