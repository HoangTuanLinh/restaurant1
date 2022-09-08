import styles from "../styles/Reservations.module.scss"
import restaurant from "../assets/restaurant.jpg"
import { BsArrowRight } from "react-icons/bs"

function Reservations() {
    return (
        <div id="reservation" className={styles.container}>
            <div className={styles.inner}>
                {/* LEFT CONTAINER */}
                <div className={styles.leftContainer}>
                    <div className={styles.desc}>
                        <div className={styles.title}>
                            <h1>Reservations</h1>
                            <h2>Make a Romantic Atmosphere Here</h2>
                        </div>
                        <p>
                        Fine dining unlike anything else you’ve ever tasted
                        </p>
                    </div>
                </div>
                {/* RIGHT CONTAINER */}
                <div className={styles.rightContainer}>
                    <div className={styles.formContainer}>
                        {/* FORM */}
                        <form action="">
                            <div className={styles.imgContainer}>
                                <img src={restaurant} alt="restaurant"/>
                            </div>
                            <div className={styles.formInner}>
                                <input type="name" className={styles.name} placeholder="Name"/>
                                <div className={styles.dateTime}>
                                    <input type="date" className={styles.date} />
                                    <input type="time" className={styles.time} />
                                </div>
                                <button>
                                    <span>Book Now</span>
                                    <BsArrowRight />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reservations