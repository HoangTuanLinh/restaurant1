import styles from "../styles/SpecialDishes.module.scss"

const dishes = [
    {
        name: "Beef Burger",
        price: 32,
        description: "Classic greek salad, barrel aged feta cheese"
    },
    {
        name: "Hangover stew",
        price: 25,
        description: "beef broth, with cabbage, bean sprouts, radish"
    },
    {
        name: "Tamago kake",
        price: 20,
        description: "Rice with a raw egg"
    },
    {
        name: "Fattoush",
        price: 32,
        description: "Crispy lettuce, crunchy fried squares of pita"
    }
]
const Dishe = ({name, price, description}) => {
    return (
        <div className={styles.disheContainer}>
            <div className={styles.dishe}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>${price}</span>
            </div>
            <p>{description}</p>
        </div>
    )
}
function SpecialDishes() {
    return (
        <div id="menu" className={styles.container}>
            {/* Title */}
            <div className={styles.title}>
                <h1>Special Dishes</h1>
                <h2>Best Recommendation Menu</h2>
            </div>
            {/* Dishes */}
            <div className={styles.dishes}>
                <div className={styles.col1}>
                   {dishes.map((dish, index) => (
                    <Dishe
                        key={index}
                        name={dish.name}
                        price={dish.price}
                        description={dish.description}
                    />
                   ))}
                </div>
                <div className="styles.col2">
                    <Dishe
                        name="Elk Burger"
                        price="25"
                        description="a succulent meat patty placed inside of a bun"
                    />
                    <Dishe
                        name="Amish Chicken"
                        price="20"
                        description="chicken, flour, garlic powder, heavy cream, paprika, water, salt"
                    />
                </div>
            </div>
        </div>
    )
}
export default SpecialDishes