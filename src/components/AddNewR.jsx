import React, {Component} from 'react';
import {fetchGeocode, newWaypoint} from '../config/urls';


class AddNewRute extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: null
		}
    this.street = React.createRef();
		this.number = React.createRef();
    this.cp = React.createRef();
		
  }

	fetchGeo = () => {
		const street =this.street.current.value;
		const number =this.number.current.value;
		const cp =this.cp.current.value;
		const urlFetch = fetchGeocode(street, number, cp);
		fetch(urlFetch)
		.then(resp => resp.json())
		.then((result) => {
			const latB = result.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
			const lngB = result.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
			const url= newWaypoint(latB, lngB);
			this.setState({
				url
			})
		})
	}
	render(){
		const { street, number,cp } = this;
		return (
			<section>
				<input type="text" placeholder="calle" ref = {street}/>
				<input type="text" placeholder="numero" ref = {number}/>
				<input type="text" placeholder="CP" ref = {cp}/>
				<button onClick={this.fetchGeo} className='light'>Nuevo punto de encuentro</button>
				<img src = {this.state.url} alt = 'Nueva punto de partida'/>
			</section>
		);
	}
}

export default AddNewRute;