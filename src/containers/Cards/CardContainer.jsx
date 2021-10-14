import React, { useState, useEffect} from 'react'
import CardList from '../../components/Cards/CardList';
import { localData } from '../../helpers/getData';
import '../../app.scss'

const CardContainer = ({favorites, setFavorites, search}) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    
    

    // useEffect(()=>{
    //     setLoading(true);
        
    //     //Obtener datos del localStorage
    //     const data = localData();
    //     console.log('data', data)
    //     // Validar si existen favoritos
    //     favorites 
    //     ? setCharacters(favorites)
    //     : setCharacters(data);


    //     setLoading(false);
    // }, [])

    // console.log(characters)

    // useEffect(() => {
    //     setLoading(true);

    //     // switch (path) {
    //     //     case 'characters': 
    //     //         return (
    //     //             getData()
    //     //                 .then(response => setCharacters(response))
    //     //                 .catch(err=> console.log(err))
    //     //                 .finally(setLoading(false))
    //     //         );
    //     //     case 'episode':
    //     //         return (
    //     //             getData()
    //     //                 .then(response => {
    //     //                     let episodes = [];
    //     //                     response.forEach (element => episodes = [...episodes, element.episode])
    //     //                     setCharacters(episodes)
    //     //                 })
    //     //                 .catch(err=> console.log(err))
    //     //                 .finally(setLoading(false))
    //     //         );
    //     //     case 'location':
    //     //         return (
    //     //             getData()
    //     //                 .then(response => {
    //     //                     let location = [];
    //     //                     response.forEach (element => location = [...location, element.episode])
    //     //                     setCharacters(location)
    //     //                 })
    //     //                 .catch(err=> console.log(err))
    //     //                 .finally(setLoading(false))
    //     //         );
    //     //     default: if (favorites && favorites.length !== 0) {
    //     //                 setCharacters(favorites)
    //     //                 setLoading(false)
    //     //             } else {
    //     //                 getData()
    //     //                     .then(response => setCharacters(response))
    //     //                     .catch(err=> console.log(err))
    //     //                     .finally(setLoading(false))
    //     //             } break;
    //     // }  
    // }, [search])

    // useEffect(()=>{
    //     setLoading(true);
        
    //     //Obtener datos del localStorage
    //     const data = localData();
    //     setCharacters(data);


    //     setLoading(false);
    // }, [])

    

    return (
        <>
            {
                //characters ?
                loading 
                ? <h2>Loading...</h2>
                : ( <div className="cardContainer">
                        <CardList 
                            characters={characters}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    </div>)
                    
                
            }
        </>
        
    )
}

export default CardContainer
