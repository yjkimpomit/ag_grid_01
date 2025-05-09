// src/components/ag-grid/AgGridTable.jsx
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { themeQuartz, colorSchemeLightCold, iconSetQuartzBold } from 'ag-grid-community';

const AgGridTable = () => {
	const [rowData, setRowData] = useState([]);

	const columnDefs = [
		{ headerName: 'Make', field: 'make' },
		{ headerName: 'Model', field: 'model' },
		{ headerName: 'Price', field: 'price' },
	];

	useEffect(() => {
		// 예시 데이터
		setRowData([
			{ make: 'Toyota', model: 'Celica Celica Celica', price: 35000 },
			{ make: 'Ford', model: 'Mondeo', price: 32000 },
			{ make: 'Porsche', model: 'Boxster', price: 72000 },
		]);
	}, []);


	// theme
	const myTheme = themeQuartz.withPart(iconSetQuartzBold).withPart(colorSchemeLightCold);

	// 별도 gridOptions 정의
	const gridOptions = {
		pagination: true,
		paginationPageSize: 5,
		paginationPageSizeSelector: [5, 10, 50, 100],
		// 기타 설정들
	};

	return (
		<div style={{ height: "100%", width: '100%' }}>
			<AgGridReact
				theme={myTheme}
				gridOptions={gridOptions}
				columnDefs={columnDefs}
				rowData={rowData}
				rowModelType="clientSide"
				domLayout='autoHeight'
			/>
		</div>
	);
};

export default AgGridTable;
