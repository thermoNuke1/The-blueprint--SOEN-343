import React from "react";
import "./Navbar.css";
import "@fontsource/red-hat-display/400-italic.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-left">
				<a
					href="/"
					className="logo"
				>
					Logo here
				</a>
			</div>
			<div className="navbar-center">
				<ul className="nav-links">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
					<li>
						<a href="/services">Services</a>
					</li>
					<li>
						<a href="/team">Meet the Team</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<a
					href="/cart"
					className="cart-icon"
				>
					<i className="fas fa-shopping-cart"></i>
					<span className="cart-count">0</span>
				</a>
				<a
					href="/account"
					className="user-icon"
				>
					<i className="fas fa-user"></i>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
