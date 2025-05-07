// src/components/layout/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './SideBar';

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
