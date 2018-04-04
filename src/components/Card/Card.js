import React, {Component} from 'react';
import placehold from './burger1.jpg';

class Card extends Component {
	
state = {
	projects: [
		{"name": "hamburger",
		 "url": "https://afternoon-sea-84029.herokuapp.com/index",
		},
		{"name": "train",
		 "url": "https://afternoon-sea-84029.herokuapp.com/index",
		 "photo": "https://lorempixel.com/200/300/cats"}
	]
}


	render() {
		return (
			<div className="card sq">
		  		<div className="card-body">
		  			<a href={this.state.projects[0].url} target="blank">
		  				<img className="card-img sample" src={placehold} alt="Card image cap"/>
		  	    		<p className="card-img-overlay card-text">Card</p>
		  			</a>
		  		</div>
			</div>
		)
	}
};

export default Card;
