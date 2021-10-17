import React, { createContext, useState } from 'react'

export const SearchContext = createContext()



export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState('')

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    return (
        <SearchContext.Provider value={{ 
            search,
            handleInput
         }}>
            {children}
        </SearchContext.Provider>
    )
}

