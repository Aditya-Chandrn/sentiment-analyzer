import React from 'react';
import Navbar from 'components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

import styles from "./layout.module.css";

const Layout = () => {
    return(
        <div className={styles.layout}>
            <Navbar/>
            <Outlet/>
        </div>
    );
}
    

export default Layout