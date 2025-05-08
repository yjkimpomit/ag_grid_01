import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 성능체크용
//import reportWebVitals from './reportWebVitals';

import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from "ag-grid-community";
import { PaginationModule } from 'ag-grid-community';
import { ValidationModule } from 'ag-grid-community';
import { TextFilterModule } from 'ag-grid-community';
import { NumberFilterModule } from 'ag-grid-community';
import { DateFilterModule } from 'ag-grid-community'; 
import { ColumnAutoSizeModule } from 'ag-grid-community'; 

import './assets/styles/index.css';

// 모듈 등록
ModuleRegistry.registerModules([
	ClientSideRowModelModule,
	PaginationModule,
	ValidationModule,
	TextFilterModule,
	NumberFilterModule,
	DateFilterModule,
	ColumnAutoSizeModule,
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
