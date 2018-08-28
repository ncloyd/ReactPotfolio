import React, {Component} from "react";

class Card extends Component {
	
	render() {
		return (
				<div className="pfolio">
					<h3 className="pject">Projects</h3>
						<div className="flex-container">
						  		<div className="card-body sq">
						  			<a href="https://afternoon-sea-84029.herokuapp.com/index" target="blank">
						  				<img className="card-img sample" src="/burger3.jpg" alt="pic"/>
						  	    		<p className="card-text"></p>
						  			</a>
						  		</div>
						  		<div className="card-body sq">
						  			<a href="https://github.com/ncloyd/restaurant" target="blank">
						  				<img className="card-img sample" src="/restfront.jpg" alt="pic"/>
						  	    		<p className="card-text"></p>
						  			</a>
						  		</div>
						  		<div className="card-body sq">
						  			<a href="https://bellsandvows.herokuapp.com/" target="blank">
						  				<img className="card-img sample" src='/wedding.jpg' alt="pic"/>
						  	    		<p className="card-text"></p>
						  			</a>
						  		</div>
						  		<div className="card-body sq">
							  		<a href="https://secret-refuge-42418.herokuapp.com/" target="blank">
							  			<img className="card-img sample" src='/map.jpg' alt="pic"/>
							  	    	<p className="card-text"></p>
							  		</a>
					  			</div>
					  	</div>
				</div>
		)
	}
};

export default Card;
