import React, { useContext } from 'react'
import {logo} from './logo'
import { BsSuitHeartFill } from 'react-icons/bs'
import '../../app.scss'
import { Link } from 'react-router-dom'
import { FavContext } from '../../context/FavContext'

const FavBar = () => {
    const { favorites } = useContext(FavContext)

    return (
        <div className="layout__favBar">
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
        </div>
        
    )
}

export default FavBar
