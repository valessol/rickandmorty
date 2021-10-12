import React from 'react'
import CardComponent from './CardComponent'
import '../../app.scss'

const CardList = ({characters, favorites, setFavorites}) => {
    //console.log(character)

    return (
        <>
            {
                [
                    characters.map((item) => {
                        return (
                                <div 
                                className="cardContainer__box" 
                                key={characters.id}
                                >
                                    <CardComponent 
                                    characters={characters}
                                    favorites={favorites}
                                    setFavorites={setFavorites}
                                    {...item} 
                                    />
                                </div>
                        )
                    })
                ]
            }   
        </>
    )
}

export default CardList;
