import React from 'react'

const SearchBar = ({placeholder, handleInput}) => {
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
