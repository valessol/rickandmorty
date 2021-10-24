import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export const StyledCard = styled(Card)`
    margin: $spacing;
    width: 30rem;
    position: relative;
`

export const StyledCardBody = styled(Card.Body)`
    background-color: $aux-dark-color;
    padding: $spacing;
`

export const StyledCardTitle = styled(Card.Title)`
    font-weight: 700;
    font-size: 3rem;
    color: $primary-color;
    text-align: center;
`

export const StyledCardText = styled(Card.Text)`
    color: $aux-light-color;
    font-size: 1.8rem;
    text-align: center;
`