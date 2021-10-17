import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const SearchBar = ({placeholder}) => {
    const { handleInput } = useContext(SearchContext)

    return (
        <div className="brand">
            <input 
                type="search" 
                placeholder={placeholder} 
                onInput={(e)=>{handleInput(e)}}
            />
            <button className="button button--search">Ver todos</button>
        </div>
    )
}

export default SearchBar
