// src/components/layout/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.css';

const Header = () => {
	return (
		<header>
			<nav className="top-nav">
				<ul>
					<li>
						<div class="datetime">
							<strong>TODAY</strong>
							<span>2025-05-07</span>
							<span>수</span>
							<span>15:08</span>
						</div>
					</li>
					<li><Link to="/login">로그아웃</Link></li>
				</ul>
			</nav>
			<nav className="global-nav">
				<Link to="/" className='logo'>
					<span className="visually-hidden">포미트</span>
				</Link>
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/ag-grid">AG Grid</Link></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
