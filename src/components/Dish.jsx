import styles from "../styles/Dish.module.css";

export default function Dish({facts, category}) {
    const {id, tittel, pris, ingredienser} = facts;

    return (
        <>
        <article id={id} className={styles.card}>
            <div>
                <h3>{tittel}</h3>
                <h4>Ingredienser</h4>
                <p>{ingredienser}</p>
            </div>
            <h5>{pris}</h5>
        </article>
        </>
    );
}
