import React from 'react'
import CardCharacters from './CardType/CardCharacters'
import CardEpisodes from './CardType/CardEpisodes'
import CardLocations from './CardType/CardLocations'
import '../../app.scss'


const CardComponent = ({item, path}) => { //+theme
    
    
    return (
        <>
            {
                path === 'characters' || path === undefined
                ? <CardCharacters {...item} />
                : path === 'episodes'
                    ? <CardEpisodes {...item} />
                    : path === 'locations'
                        ? <CardLocations {...item} />
                        : <p>Error 404</p>
            }
        </>
        
    )
}




export default CardComponent
//lugar o episodio (según el caso):
//Nombre e imagen (en caso de que se encuentre disponible).
//A su vez, cada card contendrá un botón “Verdetalle”