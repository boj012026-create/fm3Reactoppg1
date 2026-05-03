export default function Dish({facts, category}) {
    const {id, tittel, pris, ingredienser, kategori} = facts;
    console.log(category, kategori);

    if(!(category == kategori)) {
        return <></>;
    }    

    return (
        <>
        <article id={id} class="dish-card">
            <h3>{tittel}</h3>
            <div>
                <h4>Ingredienser</h4>
                <p>{ingredienser}</p>
            </div>
            <h5>{pris}</h5>
        </article>
        </>
    );
}