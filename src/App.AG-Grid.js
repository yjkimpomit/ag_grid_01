import React from "react";

import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from "ag-grid-community";
import { PaginationModule } from 'ag-grid-community';
import { ValidationModule } from 'ag-grid-community';
import { themeQuartz, colorSchemeLightCold, iconSetQuartzBold } from 'ag-grid-community';

// 모듈 등록
ModuleRegistry.registerModules([
	ClientSideRowModelModule,
	PaginationModule,
	ValidationModule,
]);

const App = () => {
	const rowData = [
		{ make: "Toyota", model: "Celica", price: 35000 },
		{ make: "Ford", model: "Mondeo", price: 32000 },
		{ make: "Porsche", model: "Boxster", price: 72000 },
	];

	const columnDefs = [
		{ field: "make" },
		{ field: "model" },
		{ field: "price" },
	];

	// theme
	const myTheme = themeQuartz.withPart(iconSetQuartzBold).withPart(colorSchemeLightCold);

	// 별도 gridOptions 정의
	const gridOptions = {
		pagination: true,
		paginationPageSize: 2,
		paginationPageSizeSelector: [2, 20, 50, 100],
		// 기타 설정들
	};

	return (
		<div style={{ height: '100%', width: '100%' }}>
			<AgGridReact
				theme={myTheme}
				gridOptions={gridOptions}
				rowData={rowData}
				columnDefs={columnDefs}
				rowModelType="clientSide"
			/>
		</div>
	);
};

export default App;
