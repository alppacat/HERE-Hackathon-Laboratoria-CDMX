import React, {Component} from 'react';
import {fetchGeocode, newWaypoint} from '../config/urls';
import Calendar from './Calendar';


class AddNewRute extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: null,
			confirmation: false
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

	confirmationState = () => {
		return this.setState({confirmation:true})
	}
	confirmationRoute = () => {
		if(!this.state.confirmation){
			return ( 
				<React.Fragment><p>Agrega un nuevo punto de encuentro</p>
				<button onClick={this.confirmationState} className='btn-floating btn-large waves-effect waves-light red'> + </button></React.Fragment>
		)
		}
		
	}
	
	renderRoute = () => {
		const { street, number,cp } = this;
		if(this.state.confirmation){
			return (
				<section id="newRoute">
					<Calendar/>
					<input type="text" placeholder="calle" ref = {street}/>
					<input type="text" placeholder="numero" ref = {number}/>
					<input type="text" placeholder="CP" ref = {cp}/>
					<button onClick={this.fetchGeo} className='btn-floating btn-large waves-effect waves-light red'><i className="material-icons">add</i></button>
	
					{/* <button onClick={this.fetchGeo}>fetch</button> */}
					<img src = {this.state.url} alt = 'Nueva punto de partida'/>
				</section>
			);
		}
	}

	render(){
		return ( <React.Fragment>
			{this.confirmationRoute()}
			{this.renderRoute()}
		</React.Fragment>)

	}
}

export default AddNewRute;