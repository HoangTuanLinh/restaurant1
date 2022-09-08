import styles from '../styles/Navbar.module.scss'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useState} from 'react'

function Navbar () {
    const [navOpen, setNavOpen] = useState(false)
    console.log(navOpen);
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <span className={styles.logo}>Food</span>
            </div>

            <div className={styles.mobileBars} onClick={() => setNavOpen(true)}>
                <FaBars />
            </div>
            <ul className={`${navOpen ? styles.menuMobileActive : undefined} ${styles.menu}`}>
                <li className={styles.mobileFaTimes} onClick={() => setNavOpen(false)}>
                    <FaTimes />
                </li>
                <li><a href='#home'>Home</a></li>
                <li><a href='#specialities'>Specialities</a></li>
                <li><a href='#about'>About Us</a></li>
                <li><a href='#menu'>Our Menu</a></li>
                <li><a href='#reservation'>Reservation</a></li>
            </ul>
        </nav>
    )
}
export default Navbar