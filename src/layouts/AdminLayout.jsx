// Layouts/AdminLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminSidebar from '../components/AdminSidebar';

const AdminLayout = () => (
	<div className="admin-layout">
		<Header />
		<div className="admin-body">
		<AdminSidebar />
			<main>
				<Outlet />  {/* 👈 여기에 하위 라우트가 렌더링 */}
			</main>
		</div>
		<Footer />
	</div>
);

export default AdminLayout;
