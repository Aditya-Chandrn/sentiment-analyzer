import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
        </div>        
    );
}

export default Navbar;