// src/components/layout/Header.jsx
import { Link } from 'react-router-dom';
import DateTimeBox from './DateTimeBox';
import '../assets/styles/components/header.css';

const Header = () => {
	return (
		<header>
			{/* <nav className="top-nav utility-menu">
				<div className="datetime">
					<strong>TODAY</strong>
					<span>2025-05-07</span>
					<span>수</span>
					<span>15:08</span>
				</div>
				<Link to="/login">로그아웃</Link>
			</nav> */}
			<nav className="global-nav">
				<Link to="/" className='logo'>
					<span className="visually-hidden">포미트</span>
					<span>브랜드타이틀</span>
				</Link>
				<ul>
					<li><Link to="/user/home">User</Link></li>
					<li><Link to="/admin/">Admin</Link></li>
					{/* <li><Link to="/ag-grid">AG Grid</Link></li> */}
				</ul>
			</nav>
			<nav className="utility-menu">
				<DateTimeBox />
				<Link to="/login">로그아웃</Link>
			</nav>
		</header>
	);
};

export default Header;
