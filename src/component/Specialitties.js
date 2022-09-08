import styles from "../styles/Specialitties.module.scss"
import { ReactComponent as Western } from "../assets/food/western.svg"
import { ReactComponent as Eastern } from "../assets/food/eastern.svg"
import { ReactComponent as Japan } from "../assets/food/japan.svg"
import { ReactComponent as Korean } from "../assets/food/korean.svg"

const FoodCard = ({foodIcon, ctg, description}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.iconContainer}>{foodIcon}</div>
            <h2>{ctg}</h2>
            <p>{description}</p>
        </div>
    )
}

function Specialitties () {
    return (
        <div id="specialities" className={styles.container}>
            {/* Title */}
            <div className={styles.title}>
                <h1>Specialitties</h1>
                <h2>Our Special Cuisine</h2>
            </div>
            {/* Card */}
            <div className={styles.cards}>
                <div className={styles.row1}>
                    <FoodCard 
                        foodIcon={<Western />}
                        ctg="western"
                        description="Western cooking emphasizes the use of seasonings and condiments, including ketchup, gravy, and mustard."
                    />
                    <FoodCard 
                        foodIcon={<Eastern />}
                        ctg="Eastern"
                        description="Middle Eastern food stems from a variety of cultures around the Mediterranean, Red, Arabian, and Caspian Seas."
                    />
                </div>
                <div className={styles.row2}>
                    <FoodCard 
                        foodIcon={<Japan />}
                        ctg="Japan"
                        description="Japan food is based on rice with miso soup and other dishes; there is an emphasis on seasonal ingredients."
                    />
                    <FoodCard 
                        foodIcon={<Korean />}
                        ctg="Korean"
                        description="Originating from ancient agricultural and nomadic traditions in Korea and southern Manchuria."
                    />
                </div>
            </div>
        </div>
    )
}
export default Specialitties