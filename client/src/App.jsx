import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from 'components/layout/Layout';

import Login from 'pages/login/Login';
import Dashboard from 'pages/dashboard/Dashboard';
import EmployeeAnalytics from 'pages/(analytics)/emp_analytics/EmpAnalytics';
import ProductAnalytics from 'pages/(analytics)/product_analytics/ProductAnalytics';
import Records from 'pages/records/Records';
import CreateEmployee from 'createData/createEmployee/createEmployee';
import CreateProduct from 'createData/createProduct/createProduct';
import CreateCall from 'createData/createCall/createCall';
import Test from 'test';
import Test_new from 'test_new';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/test' element={<Test/>}/>
        <Route path='/new' element={<Test_new/>}/>
        <Route path='/employee/create' element={<CreateEmployee/>}/>
        <Route path='/product/create' element={<CreateProduct/>}/>
        <Route path='/call/create' element={<CreateCall/>}/>
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
