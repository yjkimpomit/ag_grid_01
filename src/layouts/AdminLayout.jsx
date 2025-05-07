// Layouts/AdminLayout.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminSidebar from '../components/Sidebar';

const AdminLayout = ({ children }) => (
	<div className="admin-layout">
		<Header />
		<div className="admin-body">
			<AdminSidebar />
			<main>{children}</main>
		</div>
		<Footer />
	</div>
);

export default AdminLayout;