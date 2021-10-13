import React, { useState } from 'react'
import { Button, Card} from 'react-bootstrap'
import '../../app.scss'

const CardComponent = ({characters, favorites, setFavorites, id, image, name, episode, location}) => { //+theme
    const [itemAdded, setItemAdded] = useState (false);//ok

    const handleAddFavorites = (id) => {
        setItemAdded(!itemAdded)
        const fav = characters.find((item)=>item.id === id);
        console.log(fav)
        setFavorites([fav, ...favorites])
    }

    const handleRemoveFavorites = (id) => {
        const fav = favorites.filter((item)=>item.id !== id);
        setFavorites(fav)
        setItemAdded(!itemAdded)
    }
    
    return (
        <Card>
            <Card.Img variant="top" src={image}/>
            <Card.Body className="cardContainer__body">
                <Card.Title className="cardContainer__title">{name}</Card.Title>
                <Card.Text 
                    className="cardContainer__text">
                        Ubicación: {
                            location.name === "Earth (Replacement Dimension)"
                            ? "Earth"
                            : location.name
                        } 
                </Card.Text>
                <Card.Text 
                    className="cardContainer__text">
                        Aparece en {
                            episode.length === 1
                            ? episode.length + ' episodio'
                            : episode.length + ' episodios'
                        }
                </Card.Text>
                <Button className="button">Ver Detalle</Button>
                {
                    !itemAdded
                    ? (
                        <Button 
                            className="button button--secondary" 
                            onClick={()=> handleAddFavorites(id)}
                        >Agregar a favoritos
                        </Button>
                    ) 
                    : (
                        <Button 
                            className="button button--secondary" 
                            onClick={()=> handleRemoveFavorites(id)}
                        >Quitar de favoritos
                        </Button>
                    )
                }
            </Card.Body>
        </Card>
    )
}




export default CardComponent
//lugar o episodio (según el caso):
//Nombre e imagen (en caso de que se encuentre disponible).
//A su vez, cada card contendrá un botón “Verdetalle”