import React from 'react'

const SearchBar = () => {
    return (
        <div className="brand">
            <input 
                type="search" 
                placeholder="Busca tu favorito" 
                
            />
            <button className="button button--search">Buscar</button>
        </div>
    )
}

export default SearchBar
