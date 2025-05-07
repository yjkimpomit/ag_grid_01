// src/pages/Home.jsx
import React from 'react';
import AgGridTable from '../components/ag-grid/AgGridTable';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <AgGridTable /> {/* AG Grid 테이블을 이곳에서 사용 */}
    </div>
  );
};

export default Home;
