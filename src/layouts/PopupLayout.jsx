// Layouts/PopupLayout.jsx
const PopupLayout = ({ children }) => (
	<div className="popup-layout">
		<header>팝업 제목</header>
		<div className="popup-content">{children}</div>
	</div>
);

export default PopupLayout;