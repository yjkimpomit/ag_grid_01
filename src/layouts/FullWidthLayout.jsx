// Layouts/FullWidthLayout.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const FullWidthLayout = ({children}) => (
	<div className="fullwidth-layout">
		<Header />
		<div className="fullwidth-body">
			<main>{children}</main>
		</div>
		<Footer />
	</div>
);

export default FullWidthLayout;