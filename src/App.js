// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AgGridTable from './components/ag-grid/AgGridTable';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ag-grid" element={<AgGridTable />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
