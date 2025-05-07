// src/components/layout/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.css';

const Header = () => {
	return (
		<header>
			<nav className="top-nav">
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/ag-grid">AG Grid</Link></li>
				</ul>
			</nav>
			<nav className="global-nav">
				<Link to="/">Home</Link>
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/ag-grid">AG Grid</Link></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
