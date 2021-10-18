import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap';
import { FavContext } from '../../../context/FavContext';
import { BsSuitHeartFill } from 'react-icons/bs'

const CardCharacters = ({id, image, name, location, episode }) => {
    const { addFavorites, removeFavorites, itemAddedToFavorites } = useContext(FavContext)

    const newItem = {
        id,
        image,
        name,
        location,
        episode
    }

    const handleAddFavorites = () => {
        //const fav = item.find((e)=>e.id === id);
        addFavorites(newItem)
    }

    const handleRemoveFavorites = (id) => {
        removeFavorites(id)
    }

    return (
        <Card className="cardContainer__box">

            <Card.Img variant="top" src={image} />

            <BsSuitHeartFill 
                className={
                    !itemAddedToFavorites(id)
                    ? "favIndicator"
                    : "favIndicator favIndicator--active" 
                } 
            />
            
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
                {/* A este button le enlazo el Link que es el que va a recibir el params, o a enviar el params (el id de lo que debe mostrar) mejor dicho al componente app para que el router lo muestre en la vista de detalle */}
                {
                    !itemAddedToFavorites(id)
                    ? (
                            <Button 
                                className="button button--secondary" 
                                onClick={()=> handleAddFavorites()}
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

export default CardCharacters
