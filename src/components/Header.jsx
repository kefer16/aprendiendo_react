import React from "react";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";

const Header = () => (
	<header className="header">
		<nav className="nav">
			<h1 className="nav__title">Where in the World?</h1>
			<span className="nav__mode">
				<NightsStayRoundedIcon /> Darck Mode
			</span>
		</nav>
	</header>
);

export default Header;
