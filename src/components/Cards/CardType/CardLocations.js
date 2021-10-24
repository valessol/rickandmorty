import React from 'react'
import { StyledCard, StyledCardBody, StyledCardTitle, StyledCardText, StyledButton } from '../Card.Style'

const CardLocations = ({id, name, type, residents}) => {
    return (
        <StyledCard>
            
            <StyledCardBody>

                <StyledCardTitle >{name}</StyledCardTitle>

                <StyledCardText >
                    Tipo: {type} 
                </StyledCardText>

                <StyledButton primary >Residentes</StyledButton>
                
            </StyledCardBody>
        </StyledCard>
    )
}

export default CardLocations
