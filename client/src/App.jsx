import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from 'components/layout/Layout';

import Login from 'pages/login/Login';
import Dashboard from 'pages/dashboard/Dashboard';
import EmployeeAnalytics from 'pages/(analytics)/emp_analytics/EmpAnalytics';
import ProductAnalytics from 'pages/(analytics)/product_analytics/ProductAnalytics';
import Records from 'pages/records/Records';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='/emp_analytics' element={<EmployeeAnalytics/>}/>
          <Route path='/product_analytics' element={<ProductAnalytics/>}/>
          <Route path='/records' element={<Records/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
