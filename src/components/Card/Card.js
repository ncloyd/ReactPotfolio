import React, {Component} from "react";
import placehold from "./burger3.jpg";
import rest from "./restfront.jpg";
import wedding from "./wedding.jpg";
import map from "./map.jpg"

class Card extends Component {
	
state = {
	projects: [
		{"name": "hamburger",
		 "url": "https://afternoon-sea-84029.herokuapp.com/index",
		},
		{"name": "restaurant",
		 "url": "https://afternoon-sea-84029.herokuapp.com/index",
		}
	]
}


	render() {
		return (
			<div>
			<h3>Projects</h3>
			<div className="flex-container">
		  		<div className="card-body sq">
		  			<a href={this.state.projects[0].url} target="blank">
		  				<img className="card-img sample" src={placehold} alt="Card image cap"/>
		  	    		<p className="card-img-overlay card-text"></p>
		  			</a>
		  		</div>
		  		<div className="card-body sq">
		  			<a href={this.state.projects[1].url} target="blank">
		  				<img className="card-img sample" src={rest} alt="Card image cap"/>
		  	    		<p className="card-img-overlay card-text"></p>
		  			</a>
		  		</div>
		  		<div className="card-body sq">
		  			<a href={this.state.projects[1].url} target="blank">
		  				<img className="card-img sample" src={wedding} alt="Card image cap"/>
		  	    		<p className="card-img-overlay card-text"></p>
		  			</a>
		  		</div>
		  		<div className="card-body sq">
		  			<a href={this.state.projects[1].url} target="blank">
		  				<img className="card-img sample" src={map} alt="Card image cap"/>
		  	    		<p className="card-img-overlay card-text"></p>
		  			</a>
		  		</div>
		  	</div>
		  </div>
		)
	}
};

export default Card;
