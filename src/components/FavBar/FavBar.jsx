import React from 'react'
import {logo} from './logo'
import { BsSuitHeartFill } from 'react-icons/bs'
import '../../app.scss'

const FavBar = ({favorites}) => {

    return (
        <>
            <div className= "brand">
                <img src= {logo.url} alt='Rick and Morty Wiki' />
            </div>
            <div className="favorites">
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
            </div>
        </>
        
    )
}

export default FavBar
