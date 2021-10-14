import React from 'react'
import {logo} from './logo'
import { BsSuitHeartFill } from 'react-icons/bs'
import '../../app.scss'
import { Link } from 'react-router-dom'

const FavBar = ({favorites}) => {

    return (
        <>
            <div className= "brand">
                <img src= {logo.url} alt='Rick and Morty Wiki' />
            </div>
            <div className="favorites">
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
            </div>
        </>
        
    )
}

export default FavBar
