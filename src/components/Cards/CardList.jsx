import React from 'react'
import CardComponent from './CardComponent'
import '../../app.scss'

const CardList = ({characters, handleFavorites, itemAdded}) => {
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
                                    {...item} 
                                    handleFavorites={handleFavorites} 
                                    itemAdded={itemAdded}
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
