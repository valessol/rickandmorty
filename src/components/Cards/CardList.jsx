import React from 'react'
import CardComponent from './CardComponent'
import '../../app.scss'

const CardList = ({characters, favorites, setFavorites}) => {
    //console.log(character)
//data y setData
//loading y setloading
//useeffect llamada a la api
    return (
        <>
            {//validadcion del loading
                [ //characters &&
                    characters.map((item) => {
                        return (
                                <div 
                                className="cardContainer__box" 
                                key={characters.id}
                                >{/*le pasa la key al componente*/}
                                    <CardComponent 
                                    characters={characters}
                                    favorites={favorites}
                                    setFavorites={setFavorites}
                                    {...item} 
                                    //handlefav
                                    //theme
                                    //key
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
