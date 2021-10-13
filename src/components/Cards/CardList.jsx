import React, { useState, useEffect} from 'react'
import { localData } from '../../helpers/getData';
import CardComponent from './CardComponent'
import '../../app.scss'

const CardList = ({favorites, setFavorites, search}) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        
        //Obtener datos del localStorage
        const data = localData();
        setCharacters(data);


        setLoading(false);
    }, [])

//data y setData
//loading y setloading
//useeffect llamada a la api
    return (
        <section className="cardContainer">
            {//validadcion del loading
                loading
                ? <h2>Loading...</h2>
                : [ 
                    characters &&
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
        </section>
    )
}

export default CardList;
