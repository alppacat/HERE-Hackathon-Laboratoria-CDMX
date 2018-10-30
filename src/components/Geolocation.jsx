import React, {Component} from 'react';

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
		const url= `https://image.maps.api.here.com/mia/1.6/mapview?app_id=F2NFi480TAeaCU2fjGmC&app_code=DvU41ZrLHlIVBDtOruPEqg&lat=${lat}&lon=${lng}&vt=0&z=14`;
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
	render(){
		return(
			<React.Fragment>
				<input className='input-geo' value={this.state.value} onChange={event=>this.changeLocation(event)}/>
				<img src = {this.state.url} alt='map'/>
			</React.Fragment>
		)
	}

}
export default Geolocation;