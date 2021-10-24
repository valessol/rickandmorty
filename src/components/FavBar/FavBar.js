import React, { useContext } from 'react'
import {logo} from './logo'
import { BsSuitHeartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FavContext } from '../../context/FavContext'
import { Brand, FavIcon, StyledFavBar } from './FavBar.Style'

const FavBar = () => {
    const { favorites } = useContext(FavContext)

    return (
        <StyledFavBar>
            <Brand>
                <img src= {logo.url} alt='Rick and Morty Wiki' />
            </Brand>
            <FavIcon>
                <Link to="/">
                    <span>
                        {
                            favorites 
                                ? favorites.length === 0 
                                    ? '' 
                                    : favorites.length 
                                : ''
                        }
                        <BsSuitHeartFill />
                    </span>
                </Link>
            </FavIcon>
        </StyledFavBar>
        
    )
}

export default FavBar
