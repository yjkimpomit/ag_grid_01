// components/Sidebar.jsx
import { Link } from 'react-router-dom';
import '../assets/styles/components/sidebar.css';

const AdminSidebar = () => {
	return (
		<aside className="sidebar">
		<nav>
			<ul>
				<li><Link to="/admin/dashboard">대시보드</Link>
					<ul>
						<li><Link to="/admin/dashboard/grid">그리드</Link></li>
						<li><Link to="/admin/dashboard/realtime">실시간 모니터링</Link></li>
						<li><Link to="/admin/dashboard/notice">공지사항</Link></li>
					</ul>
				</li>
				<li><Link to="/admin/user">회원 관리</Link>
					<ul>
						<li><Link to="/admin/user/list">회원 목록</Link></li>
						<li><Link to="/admin/user/register">회원 등록</Link></li>
						<li><Link to="/admin/user/withdrawn">탈퇴 회원 관리</Link></li>
					</ul>
				</li>
				<li><Link to="/admin/settings">시스템 설정</Link>
					<ul>
						<li><Link to="/admin/settings/roles">권한 관리</Link></li>
						<li><Link to="/admin/settings/env">환경 설정</Link></li>
						<li><Link to="/admin/settings/logs">로그 관리</Link></li>
					</ul>
				</li>
			</ul>
		</nav>
		</aside>
	);
};

export default AdminSidebar;
