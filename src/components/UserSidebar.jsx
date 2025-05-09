// components/Sidebar.jsx
import { Link } from 'react-router-dom';
import '../assets/styles/components/sidebar.css';

const UserSidebar = () => {
	return (
		<aside className="sidebar">
			<nav>
				<ul>
					<li><Link to="/user/home">사용자메뉴1</Link></li>
					<li><Link to="/user/about">사용자메뉴2</Link></li>
					<li><Link to="/user/home">사용자메뉴3</Link></li>
				</ul>
			</nav>
		</aside>
	);
};

export default UserSidebar;
