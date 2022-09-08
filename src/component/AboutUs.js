import styles from '../styles/AboutUs.module.scss'
import bg1 from "../assets/bg1.jpg"
import restaurant from "../assets/restaurant.jpg"

function AboutUs() {
    return(
        <div id="about" className={styles.container}>
            <div className={styles.bg1}>
                <img src={bg1} alt="bg1"/>
            </div>

            <div className={styles.restaurant}>
                <img src={restaurant} alt="restaurant"/>
                <div className={styles.aboutUs}>
                    <h2>About Us</h2>
                    <h3>We always Sreve You Better</h3>
                    <p>
                    Inspired by the seasons, our tasting menus offer fresh, local ingredients in unique flavor combinations.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AboutUs