// src/components/ag-grid/AgGridTable.jsx
import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { themeQuartz, colorSchemeLightCold, iconSetQuartzBold } from 'ag-grid-community';

const ReusableGrid = ({ columnDefs, rowData }) => {
	// 마지막 컬럼에만 flex: 1을 추가
	const enhancedColumnDefs = useMemo(() => {
		if (!columnDefs || columnDefs.length === 0) return [];
		return columnDefs.map((col, idx) =>
			idx === columnDefs.length - 1
				? { ...col, flex: 1 }
				: { ...col, flex: undefined } // 혹시 flex가 있으면 제거
		);
	}, [columnDefs]);

	const defaultColDef = {
		sortable: true,
		filter: true,
		resizable: true,
	};

	// theme	
	const myTheme = themeQuartz
		.withPart(iconSetQuartzBold)
		.withPart(colorSchemeLightCold)
		.withParams({
			fontFamily: "Noto Sans KR, sans-serif",
			// 또는 Google 폰트 사용 예시:
			// fontFamily: { googleFont: 'IBM Plex Sans' },
			// headerFontFamily: { googleFont: 'Roboto' },
			// cellFontFamily: 'monospace',
		});

	// 별도 gridOptions 정의
	const gridOptions = {
		pagination: true,
		paginationPageSize: 5,
		paginationPageSizeSelector: [5, 10, 50, 100],
		// 기타 설정들
	};

	return (
		<div style={{ height: "100%", width: '100%', marginBottom: '20px' }}>
			<AgGridReact
				theme={myTheme}
				loadThemeGoogleFonts={true}
				gridOptions={gridOptions}
				columnDefs={enhancedColumnDefs}
				rowData={rowData}
				defaultColDef={defaultColDef}
				rowModelType="clientSide"
				domLayout='autoHeight'
				onGridReady={event => event.api.sizeColumnsToFit()}
				onGridSizeChanged={event => event.api.sizeColumnsToFit()}
			/>
		</div>
	);
};

export default ReusableGrid;
