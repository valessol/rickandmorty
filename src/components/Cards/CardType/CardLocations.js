import React from 'react'
import { StyledButton } from '../../StyledComponents/StyledButton'
import { StyledCard, StyledCardBody, StyledCardText, StyledCardTitle } from '../../StyledComponents/StyledCard'

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
