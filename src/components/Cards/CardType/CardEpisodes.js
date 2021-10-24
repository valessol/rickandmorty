import React from 'react'
import { StyledButton } from '../../StyledComponents/StyledButton'
import { StyledCard, StyledCardBody, StyledCardText, StyledCardTitle } from '../../StyledComponents/StyledCard'

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

