import React, { useContext, useState } from 'react'
import { Button, Card} from 'react-bootstrap'
import { BsSuitHeartFill } from 'react-icons/bs'
import '../../app.scss'
import { FavContext } from '../../context/FavContext'


const CardComponent = ({characters, id, image, name, episode, location}) => { //+theme
    const { addFavorites, removeFavorites, itemAddedToFavorites } = useContext(FavContext)

    const handleAddFavorites = (id) => {
        const fav = characters.find((item)=>item.id === id);
        addFavorites(fav)
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