import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent'
import '../../app.scss'
import { localData } from '../../helpers/getData';

const CardList = ({ favorites, setFavorites}) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        
        //Obtener datos del localStorage
        const data = localData();
        setCharacters(data);


        setLoading(false);
    }, [])

    //console.log(character)
//data y setData
//loading y setloading
//useeffect llamada a la api
return (
    <section className="cardContainer">
        {
            loading
            ? <h2>Loading...</h2>
            : [ 
                characters &&
                characters.map((item) => {
                    return (
                                <CardComponent 
                                    key={characters.id}
                                    characters={characters}
                                    favorites={favorites}
                                    setFavorites={setFavorites}
                                    {...item} 
                                    //handlefav
                                    //theme
                                />
                    )
                })
            ]
        }   
    </section>
)
}

export default CardList;
