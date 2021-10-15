import React, { useState, useEffect} from 'react'
import { localData } from '../../helpers/getData';
import CardComponent from './CardComponent'
import '../../app.scss'

const CardList = ({path, favorites, setFavorites, search, setSearch}) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    

    
    useEffect(()=>{
        setLoading(true);
        
        if (path === 'characters') {
            const data = localData('characters');
            if (search.length >=3) {
                const filterData = data.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
                //console.log(filterData)
                setCharacters(filterData);
            } else {
                setCharacters(data)
            } 
            //console.log('estoy en personajes')
        } else if (favorites && favorites.length !==0 ) {
            setCharacters(favorites);
            console.log('estoy en favoritos')
        }
        // const data = localData('characters');
        // console.log(search)
        // setCharacters(data);
       
        
        //Obtener datos del localStorage4653 14614
        

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
    }, [path, search])

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
                                        search={search}
                                        setCharacters={setCharacters}
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
