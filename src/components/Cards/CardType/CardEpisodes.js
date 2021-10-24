import React from 'react'
import { StyledCard, StyledCardBody, StyledCardTitle, StyledCardText, StyledButton } from '../Card.Style'

const CardEpisodes = ({id, name, air_date, episode, characters}) => {
    return (
        <StyledCard>
            
            <StyledCardBody >

                <StyledCardTitle>{episode}</StyledCardTitle>

                <StyledCardText>{name}</StyledCardText>

                <StyledCardText>
                    Fecha de emisión: {air_date} 
                </StyledCardText>

                <StyledButton primary>Personajes</StyledButton>
                
            </StyledCardBody>
        </StyledCard>
    )
}

export default CardEpisodes

