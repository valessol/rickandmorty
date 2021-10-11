import React from 'react'
import { Button, Card} from 'react-bootstrap'
import '../../app.scss'

const CardComponent = ({id, image, name, episode, location, handleFavorites, itemAdded}) => {
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
                <Button 
                    className="button button--secondary" 
                    onClick={()=> handleFavorites(id)}
                >
                        {
                            itemAdded
                            ? 'Quitar de Favoritos'
                            : 'Agregar a Favoritos'
                        } 
                </Button>
            </Card.Body>
        </Card>
    )
}




export default CardComponent
//lugar o episodio (según el caso):
//Nombre e imagen (en caso de que se encuentre disponible).
//A su vez, cada card contendrá un botón “Verdetalle”