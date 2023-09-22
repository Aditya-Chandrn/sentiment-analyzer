"use client"

import React, { useState } from 'react'
import styles from "./login.module.css";
import axios from 'axios';
import { redirect } from 'next/navigation';

const Login = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/login";
    const adminData = {adminId : adminId, password : password};
    
    try{
      const {data} = await axios.post(
        url,
        adminData,
        {withCredentials:true}
      );
      const {message, success} = data;

      if(success) window.location.replace("/");
      else alert(message);
    } catch (error) {
      console.error("Error : ",error.message);
    }
  }

  return (
    <div className={styles.login}>
      <form name='login' method='POST' onSubmit={submitData}>
        <label htmlFor='adminId'>Admin ID</label>
        <input type="text" id='adminId' value={adminId} onChange={e => setAdminId(e.target.value)}/>
        <label htmlFor='password'>Password</label>
        <input type="password" id='password' value={password} onChange={e=> setPassword(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login;