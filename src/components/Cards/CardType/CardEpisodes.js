import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CardEpisodes = ({id, name, air_date, episode, characters}) => {
    return (
        <Card className="cardContainer__box">
            
            <Card.Body className="cardContainer__body">

                <Card.Title className="cardContainer__title">{episode}</Card.Title>

                <Card.Text className="cardContainer__text">
                    {name}
                </Card.Text>

                <Card.Text className="cardContainer__text">
                    Fecha de emisión: {air_date} 
                </Card.Text>

                <Button className="button">Personajes</Button>
                
            </Card.Body>
        </Card>
    )
}

export default CardEpisodes

