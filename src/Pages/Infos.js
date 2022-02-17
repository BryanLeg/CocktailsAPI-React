import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';

const Infos = () => {
    const { id } = useParams();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const { isLoading, data: cocktail } = useFetch(url)
    return (
        <>
            {isLoading ? <h1 className="loading">loading...</h1> : <section className='single-drink'>
                {cocktail.drinks.map(drink => {
                    const { strDrink: name } = drink;
                    const {
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = drink;
                    const { strInstructions: instructions } = drink;
                    const { strDrinkThumb: image } = drink;
                    const { strAlcoholic: alcoholic } = drink;
                    const { strGlass: glass } = drink;

                    return (
                        <>
                            <img src={image} alt="cocktail" className="drink-img" />
                            <article className="drink-info">
                                <h2 className="drink-name">{name}</h2>
                                <h3>{alcoholic}</h3>
                                <h4>{glass}</h4>
                                <p className="drink-description">{instructions}</p>
                                <ul className="drink-ingredients">
                                    <li>{strIngredient1}</li>
                                    <li>{strIngredient2}</li>
                                    <li>{strIngredient3}</li>
                                    <li>{strIngredient4}</li>
                                    <li>{strIngredient5}</li>
                                </ul>

                            </article>
                        </>
                    )
                })}
            </section>}
        </>
    )
}

export default Infos