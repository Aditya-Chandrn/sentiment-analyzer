import React, { useState } from 'react';
import styles from "./navbar.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import DashboardIcon from "assets/dashboard.png";
import ProductAnalyticsIcon from "assets/product_analytics.png";
import EmpAnalyticsIcon from "assets/emp_analytics.png";
import RecordsIcon from "assets/records.png";
import SignoutIcon from "assets/signout.png";
import DefaultUserIcon from "assets/default_user.png";


const Signout = () => {
    const handleSignout = () => {

    }

    return(
        <button className={styles.navOption} onClick={handleSignout}>
            <img
                className={styles.icon}
                src={SignoutIcon} 
                alt="sign out"
            /> Sign Out
        </button>
    );
}

const Profile = () => {
    const [adminId, setAdminId] = useState("AdminId");
    const [adminName, setAdminName] = useState("AdminName");
    const [adminImage, setAdminImage] = useState(DefaultUserIcon);
    const [imgLoad, setImgLoad] = useState(false);

    const onLoad = () => {
        setImgLoad(true);
    };

    return(
        <div className={styles.navOption}>

            <img
                className={styles.profileIcon}
                src={adminImage} 
                alt={adminName.toLowerCase()}
                onLoad= {onLoad}
            />
            {imgLoad ? <div className={styles.info}>
                <div className={styles.name}>{adminName}</div>
                <div className={styles.id}>{adminId}</div>
            </div>: " "}
        </div>
    );
}

const NavOption = ({option}) => {
    const resolvedPath = useResolvedPath(option.link);
    const isActive = useMatch({path : resolvedPath.pathname, end:true});

    return(
        <Link to={option.link} 
            className={ isActive ? `${styles.navOption} ${styles.currentOption}` : `${styles.navOption}`}
        >
            <img
                className={styles.icon}
                src={option.icon} 
                alt={option.name.toLowerCase()}
            /> {option.name}
        </Link>
    );
}

const options = [
    {name: "Dashboard", icon: DashboardIcon, link: "/"},
    {name: "Product Analytics", icon: ProductAnalyticsIcon, link: "/product_analytics"},
    {name: "Employee Analytics", icon: EmpAnalyticsIcon, link: "/emp_analytics"},
    {name: "Call Records", icon: RecordsIcon, link: "/call_records"}
]

const Navbar = ({children}) => {

    return(
        <div className={styles.navbar}>
            {options.map((option, index) =>{ 
                return <NavOption 
                            key={index}
                            option={option}
                        />
                }   
            )}

            <div className={styles.auth}>
                <Signout/>
                <Profile/>
            </div>
            {children}
        </div>        
    );
}

export default Navbar;