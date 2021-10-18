import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CardLocations = ({id, name, type, residents}) => {
    return (
        <Card className="cardContainer__box">
            
            <Card.Body className="cardContainer__body">

                <Card.Title className="cardContainer__title">{name}</Card.Title>

                <Card.Text className="cardContainer__text">
                    Tipo: {type} 
                </Card.Text>

                <Button className="button">Residentes</Button>
                
            </Card.Body>
        </Card>
    )
}

export default CardLocations
