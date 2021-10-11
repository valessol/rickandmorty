import React, { useState, useEffect} from 'react'
import CardList from '../../components/Cards/CardList';
import { getData } from '../../helpers/getData';
import '../../app.scss'

const CardContainer = ({path, favorites, setFavorites}) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [itemAdded, setItemAdded] = useState (false)

    useEffect(() => {
        setLoading(true);

        switch (path) {
            case 'characters': 
                return (
                    getData()
                        .then(response => setCharacters(response))
                        .catch(err=> console.log(err))
                        .finally(setLoading(false))
                );
            case 'episode':
                return (
                    getData()
                        .then(response => {
                            let episodes = [];
                            response.forEach (element => episodes = [...episodes, element.episode])
                            setCharacters(episodes)
                        })
                        .catch(err=> console.log(err))
                        .finally(setLoading(false))
                );
            case 'location':
                return (
                    getData()
                        .then(response => {
                            let location = [];
                            response.forEach (element => location = [...location, element.episode])
                            setCharacters(location)
                        })
                        .catch(err=> console.log(err))
                        .finally(setLoading(false))
                );
            default: if (favorites && favorites.length !== 0) {
                        setCharacters(favorites)
                        setLoading(false)
                    } else {
                        getData()
                            .then(response => setCharacters(response))
                            .catch(err=> console.log(err))
                            .finally(setLoading(false))
                    } break;
        }  
    }, [])

    const handleFavorites = (id) => {
        setItemAdded(!itemAdded)
        const fav = characters.find((item)=>item.id === id);
        setFavorites([...favorites, fav])
      }
    

    return (
        <>
            {
                loading 
                ? <h2>Loading...</h2>
                : ( <div className="cardContainer">
                        <CardList 
                            characters={characters}
                            handleFavorites={handleFavorites}
                            itemAdded={itemAdded}/>
                    </div>)
                    
                
            }
        </>
        
    )
}

export default CardContainer
