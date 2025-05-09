import React from 'react';
import ReusableGrid from '../../../components/ag-grid/ReusableAgGridTable';
import '../../../assets/styles/pages/dashboard.css';


const DashboardGrid = () => {
	
	const adminColumns = [
		{ headerName: 'Make', field: 'make' },
		{ headerName: 'Model', field: 'model' },
		{ headerName: 'Price', field: 'price' },
	];

	const adminData = [
		{ make: 'Toyota', model: 'Celica Celica Celica', price: 35000 },
		{ make: 'Porsche', model: 'Taycan', price: 122000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxster', price: 72000 },
		{ make: 'SAAB', model: 'SUV', price: 82000 },
		{ make: 'Toyota', model: 'Supra', price: 35000 },
		{ make: 'Ford', model: 'EXPLORER', price: 52000 },
		{ make: 'Toyota', model: 'CAMRY', price: 32000 },
		{ make: 'Porsche', model: 'Cayenne', price: 92000 },
		{ make: 'Ford', model: 'Bronco', price: 7292000 },
	];

	return (
		<div className="dashboard-container">

			{/* 콘텐츠 영역 (우측) */}
			<h1>대시보드</h1>
			<p>여기에 대시보드 콘텐츠가 표시됩니다.</p>
			{/* 추가적인 콘텐츠를 여기에 추가할 수 있습니다. */}

			<ReusableGrid columnDefs={adminColumns} rowData={adminData} />
			
			<h2>Second Title</h2>
			<p>여기에 대시보드 콘텐츠가 표시됩니다.</p>
			<h3>Third Title</h3>
			<p>여기에 대시보드 콘텐츠가 표시됩니다.</p>
			<h4>Fourth Title</h4>
			<p>여기에 대시보드 콘텐츠가 표시됩니다.</p>
			<h5>Fifth Title</h5>
			<p>여기에 대시보드 콘텐츠가 표시됩니다.</p>
			<h6>Sixth Title</h6>
			<p>여기에 대시보드 콘텐츠가 표시됩니다.</p>

		</div>
	);
};

export default DashboardGrid;
