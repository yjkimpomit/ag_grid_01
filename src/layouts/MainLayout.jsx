// src/components/layout/Layout.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
	return (
		<div className="main-layout">
			<Header />
			<div className="main-content">
				<Sidebar />
				<main>{children}</main>
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
