// Layouts/UserLayout.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserSidebar from '../components/UserSidebar';

const UserLayout = ({ children }) => (
	<div className="user-layout">
		<Header />
		<div className="user-body">
			<UserSidebar />
			<main>{children}</main>
		</div>
		<Footer />
	</div>
);

export default UserLayout;
