import Dish from "./Dish";

export default function Menu({menu}) {
    console.log(menu);
    return(
        <>
        <h1>Menu</h1>
        <h2>Foretter</h2>
        {menu.map((dish) => (
            <Dish facts={dish} category={"Forrett"}/>
        ))}
        <h2>Hovedretter</h2>
        {menu.map((dish) => (
            <Dish facts={dish} category={"Hovedrett"}/>
        ))}
        <h2>Desserter</h2>
        {menu.map((dish) => (
            <Dish facts={dish} category={"Dessert"}/>
        ))}
        </>
    );
}