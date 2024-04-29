import React from "react";
import "../css/css-components/header.css";
import PersistentDrawerLeft from "./Drawer";

function Header() {
	return (
		<header className="header">
			<PersistentDrawerLeft />
		</header>
	);
}

export default Header;
