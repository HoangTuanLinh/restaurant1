import styles from '../styles/Home.module.scss'
import Navbar from './Navbar'
import {BsArrowRight} from 'react-icons/bs'
import eating from '../assets/eating.jpg'

function Home () {
    return (
        <div id="home" className={styles.home}>
            {/* nav */}
            <div className={styles.nav}>
            <Navbar />
            </div>

            {/* BG1 */}
            <div className={styles.bg1}>
                <div className={styles.photo1}>
                    <div className={styles.photoContainer}>
                        <img src={eating} alt="eating" />
                    </div>
                </div>
            </div>

            {/* Slogan */}
            <div className={styles.slogan}>
                <h1>Feel The Autenthic & Original Taste From Us</h1>
                <p>Fine dining unlike anything else you’ve ever tasted</p>
                <button className={styles.btn}>
                    <span><a href='#specialities'>See More</a></span>
                    <BsArrowRight />
                </button>
            </div>
        </div>

    )
}
export default Home