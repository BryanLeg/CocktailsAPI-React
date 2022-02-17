import React, { createContext, useState } from 'react'
import useFetch from './useFetch';

export const CocktailsContext = createContext();


export const ContextAPI = ({ children }) => {
    const [search, setSearch] = useState('')
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    const { isLoading, data: cocktails } = useFetch(url);

    return (
        <CocktailsContext.Provider value={{ isLoading, cocktails, search, setSearch }}>
            {children}
        </CocktailsContext.Provider>
    )
}

