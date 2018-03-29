import React, {Component} from 'react';

class Card extends Component {
	
state = {
	projects: [
		{"name": "hamburger",
		 "url": "https://afternoon-sea-84029.herokuapp.com/index",
		"photo": "http://lorempixel.com/200/100"},
		{"name": "train",
		"photo": "http://placekitten.com/g/200/300"}
	]
}

	render() {
		return (
			<div className="card sq">
		  		<img className="card-img-top" src={this.state.projects[0].photo} alt="Card image cap"/>
		  		<div className="card-body">
		    		<p className="card-text">Card</p>
		  		</div>
			</div>
		)
	}
};

export default Card;
