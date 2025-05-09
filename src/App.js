// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';

// 레이아웃
//import BlankLayout from './layouts/BlankLayout';
import FullWidthLayout from './layouts/FullWidthLayout';
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';
import PopupLayout from './layouts/PopupLayout';

// 관리자
// 1차 메뉴(공통 디자인)
import DashboardHome from './pages/admin/DashboardHome';
import AdminUserHome from './pages/admin/AdminUserHome';
import SettingsHome from './pages/admin/SettingsHome';

// 2차 메뉴(고유 디자인)
import DashboardGrid from './pages/admin/dashboard/Grid';
import DashboardRealtime from './pages/admin/dashboard/Realtime';
import DashboardNotice from './pages/admin/dashboard/Notice';

import UserList from './pages/admin/user/List';
import UserRegister from './pages/admin/user/Register';
import UserWithdrawn from './pages/admin/user/Withdrawn';

import SettingsRoles from './pages/admin/settings/Roles';
import SettingsEnv from './pages/admin/settings/Env';
import SettingsLogs from './pages/admin/settings/Logs';

// 사용자
import UserHome from './pages/user/Home';
import About from './pages/user/About';

// 팝업
import PopupPage from './pages/PopupPage';

import './assets/styles/layout.css';

function App() {
	return (
		<Router>
			<Routes>
				{/* 루트 */}
				<Route path="/" element={<Navigate to="/login" replace />} />

				{/* 로그인 */}
				<Route path="/login" element={
					<Login />
				} />

				{/* 인덱스(좌측 메뉴 없는 레이아웃) */}
				<Route path="/admin" element={<FullWidthLayout><DashboardHome /></FullWidthLayout>} />

				<Route path="/admin/*" element={<AdminLayout />}>
					{/* 1차 메뉴: 공통 디자인 */}
					<Route path="dashboard" element={<DashboardGrid />} />
					<Route path="user" element={<AdminUserHome />} />
					<Route path="settings" element={<SettingsHome />} />

					{/* 2차 메뉴: 고유 디자인 */}
					<Route path="dashboard/grid" element={<DashboardGrid />} />
					<Route path="dashboard/realtime" element={<DashboardRealtime />} />
					<Route path="dashboard/notice" element={<DashboardNotice />} />

					<Route path="user/list" element={<UserList />} />
					<Route path="user/register" element={<UserRegister />} />
					<Route path="user/withdrawn" element={<UserWithdrawn />} />

					<Route path="settings/roles" element={<SettingsRoles />} />
					<Route path="settings/env" element={<SettingsEnv />} />
					<Route path="settings/logs" element={<SettingsLogs />} />
				</Route>

				{/* 사용자 레이아웃 */}
				<Route path="/user/home" element={
					<UserLayout><UserHome /></UserLayout>
				} />

				{/* 사용자 레이아웃 */}
				<Route path="/user/about" element={
					<UserLayout><About /></UserLayout>
				} />

				{/* 팝업 페이지 */}
				<Route path="/popup/sample" element={
					<PopupLayout><PopupPage /></PopupLayout>
				} />
				<Route path="*" element={<div>404 Not Found</div>} />
			</Routes>
		</Router>
	);
}

export default App;
