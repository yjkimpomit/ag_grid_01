// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import UserHome from './pages/user/Home';
import PopupPage from './pages/PopupPage';

import SimpleLayout from './layouts/SimpleLayout';

import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';
import PopupLayout from './layouts/PopupLayout';

import './assets/styles/layout.css';
/* // css
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css'; // quartz 테마 CSS */

function App() {
  return (
    <Router>
      <Routes>
		{/* 루트 */}
	  	<Route path="/" element={<Navigate to="/login" />} />

        {/* 로그인 */}
        <Route path="/login" element={
          <SimpleLayout><Login /></SimpleLayout>
        } />

        {/* 관리자 레이아웃 */}
        <Route path="/admin/dashboard" element={
          <AdminLayout><Dashboard /></AdminLayout>
        } />

        {/* 사용자 레이아웃 */}
        <Route path="/user/home" element={
          <UserLayout><UserHome /></UserLayout>
        } />

        {/* 팝업 페이지 */}
        <Route path="/popup/sample" element={
          <PopupLayout><PopupPage /></PopupLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
