"use client"

import React from 'react'
import { useState } from 'react'
import Navbar from './navbar/Navbar';

import { redirect } from 'next/navigation';

const Layout = ({children}) => {
    const [isLogged, setIsLogged] = useState(false);
    if(!isLogged) redirect("/login")
    return (
        <div>
            <Navbar/> {children}
        </div>
    )
}
    

export default Layout