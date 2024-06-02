import React from 'react'

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from 'components/layout/Layout'

import Login from 'pages/login/Login'
import Dashboard from 'pages/dashboard/Dashboard'
import EmployeeAnalytics from 'pages/(analytics)/emp_analytics/EmpAnalytics'
import ProductAnalytics from 'pages/(analytics)/product_analytics/ProductAnalytics'
import CallRecords from 'pages/callRecords/CallRecords'
import CreateEmployee from 'createData/createEmployee/createEmployee'
import CreateProduct from 'createData/createProduct/createProduct'
import CreateCall from 'createData/createCall/createCall'
import Test from 'test'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/test' element={<Test />} />
        <Route path='/employee/create' element={<CreateEmployee />} />
        <Route path='/product/create' element={<CreateProduct />} />
        <Route path='/call/create' element={<CreateCall />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/emp_analytics' element={<EmployeeAnalytics />} />
          <Route path='/product_analytics' element={<ProductAnalytics />} />
          <Route path='/call_records' element={<CallRecords />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
