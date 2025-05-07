// Layouts/ModalLayout.jsx
const ModalLayout = ({ children }) => (
	<div className="modal-overlay">
		<div className="modal-window">{children}</div>
	</div>
);

export default ModalLayout;