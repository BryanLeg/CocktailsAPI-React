import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CocktailsContext } from '../CocktailsContext'


const Home = () => {

    const { cocktails, isLoading, search, setSearch } = useContext(CocktailsContext);

    return (
        <main>
            <form className="search-form" >
                <h2>cocktails API</h2>
                <input
                    type="text"
                    placeholder="search your favorite cocktail"
                    value={search} onChange={(e) => {
                        e.preventDefault()
                        setSearch(e.target.value)
                    }}
                />
            </form>
            {isLoading ? <h1 className='loading'>Loading...</h1> : <>
                {cocktails.drinks !== null ? <section className="section cocktails">
                    <div className="section-center">
                        {cocktails.drinks.map(drink => {
                            const { strDrink: name } = drink;
                            const { strDrinkThumb: image } = drink;
                            const { idDrink: id } = drink;
                            return (
                                <Link to={`/infos/${id}`} key={id}>
                                    <article className='cocktail' >
                                        <img src={image} alt={name} />
                                        <h3>${name}</h3>
                                    </article>
                                </Link>
                            )
                        })}
                    </div>
                </section> : <h2 className="title">Aucun cocktail ne correspond</h2>}
            </>}
        </main>
    )
}

export default Home