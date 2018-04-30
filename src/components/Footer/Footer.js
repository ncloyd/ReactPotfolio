import React from "react";
import git from "./git1.png";
import linkedin from "./link1.png";

const Footer = () => (
	<div className="foot">
		<div className="footText">NC 2018</div>
		<div className="contact">
			<a href="https://github.com/ncloyd" target="blank">
				<img src={git} alt="git" className="smallimg" />
			</a>	
			<a href="https://linkedin.com/in/nicole-cloyd-241b0073" target="blank">
				<img src={linkedin} alt="linkedin" className="smallimg" />
			</a>
		</div>
	</div>

	);

export default Footer;