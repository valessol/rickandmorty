import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { SearchButton, StyledSearchBar } from './SearchBar.Style'

const SearchBar = ({placeholder}) => {
    const { handleInput } = useContext(SearchContext)

    return (
        <StyledSearchBar>
            <input 
                type="search" 
                placeholder={placeholder} 
                onInput={(e)=>{handleInput(e)}}
            />
            <SearchButton primary>Ver todos</SearchButton>
        </StyledSearchBar>
    )
}

export default SearchBar
