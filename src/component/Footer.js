import styles from "../styles/Footer.module.scss"
import { FaInstagramSquare, FaLinkedinIn, FaFacebook } from "react-icons/fa"

function Footer () {
    return(
        <footer className={styles.container}>
            <nav className={styles.nav}>
                {/* LOGO */}
                <div className={styles.logoContainer}>
                    <span className={styles.logo}>Food</span>
                    <span className={styles.copyright}>© Copyright Food. All rights reserved</span>
                </div>
                {/* MENU */}
                <ul>
                    <li>Private policy</li>
                    <li>Terms</li>
                    <li className={styles.socialContainer}>
                        <ul className={styles.socials}>
                            <li>
                                <FaFacebook />
                            </li>
                            <li>
                                <FaLinkedinIn />
                            </li>
                            <li>
                                <FaInstagramSquare />
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
export default Footer