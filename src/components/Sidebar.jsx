// components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<nav>
				<ul>
					<li><Link to="/admin/dashboard">대시보드</Link></li>
					<li><Link to="/user/home">사용자 관리</Link></li>
					<li><Link to="/admin/settings">설정</Link></li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
