import React, { useState, useEffect} from 'react'
import { localData } from '../../helpers/getData';
import CardComponent from './CardComponent'
import '../../app.scss'

const CardList = ({path, favorites, setFavorites, search}) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        
        if (path === 'characters') {
            const data = localData('characters');
            setCharacters(data);
        } else if (favorites && favorites.length !==0 ) {
            setCharacters(favorites);
        }
       
        
        //Obtener datos del localStorage
        

        // switch (path) {
        //     case 'characters': 
        //             setCharacters(localData('characters'))
        //             setLoading(false);
        //             break;
        //     case 'episodes':
        //             setCharacters(localData('episodes'));
        //             break;
        //     case 'locations':
        //             setCharacters(localData('locations'));
        //             break;
        //     default: if (favorites && favorites.length !== 0) {
        //                 setCharacters(favorites)
        //                 setLoading(false)
        //             } else {
        //                 setCharacters(localData('characters'))
        //                 setLoading(false);
        //             } break;
        // }
        setLoading(false)
    }, [path])

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
