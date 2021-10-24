import styled from 'styled-components'
import { globals } from './globals'
import { Card } from 'react-bootstrap'

export const StyledCard = styled(Card)`
    margin: ${globals.spacing};
    width: 30rem;
    position: relative;
`

export const StyledCardBody = styled(Card.Body)`
    background-color: ${globals.auxDarkColor};
    padding: ${globals.spacing};
`

export const StyledCardTitle = styled(Card.Title)`
    font-weight: 700;
    font-size: 3rem;
    color: ${globals.primaryColor};
    text-align: center;
`

export const StyledCardText = styled(Card.Text)`
    color: ${globals.auxLightColor};
    font-size: 1.8rem;
    text-align: center;
`