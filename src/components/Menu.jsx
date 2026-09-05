import Dish from "./Dish";
import styles from "../styles/Menu.module.css"

export default function Menu({menu}) {
    console.log(menu);
    return(
	<article>
	    <h2 className={styles.textCenter}>{menu[0].kategori}</h2>
            <div className={styles.menu}>
                {menu.map((dish) => (
                    <Dish facts={dish} category={"Forrett"}/>
                ))}
            </div>
	</article>
    );
}
