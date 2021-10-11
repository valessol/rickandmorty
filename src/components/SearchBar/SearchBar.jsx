import React from 'react'

const SearchBar = ({handleInput}) => {
    return (
        <div className="brand">
            <input 
                type="search" 
                placeholder="Busca tu favorito" 
                onInput={(e)=>{handleInput(e)}}
            />
            <button className="button button--search">Buscar</button>
        </div>
    )
}

export default SearchBar
