import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<>
			<footer className="footer py-5">
				<p>copyright © Tech Spot {year}</p>
			</footer>
		</>
	);
};
export default Footer;
