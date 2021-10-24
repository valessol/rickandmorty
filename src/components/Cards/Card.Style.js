import styled from 'styled-components'
import { globals } from '../../globals.Style'
import { Card } from 'react-bootstrap'
import { BsSuitHeartFill } from 'react-icons/bs'
import { Button } from 'react-bootstrap'

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


export const FavBtn = styled(BsSuitHeartFill)`
    position: absolute;
    top: 0;
    right: 0;
    color: ${globals.primaryColor};
    opacity: 0;
`

export const FavBtnActive = styled(FavBtn)`
    opacity: 1;
    animation: addToFavorites 0.2s linear;

    @keyframes addToFavorites {
        0% {
            transform: scale(0);
        }
        30% {
            transform: scale(150%);
        }
        100% {
            transform: scale(100%);
        }
    }
`

export const StyledButton = styled(Button)`
    background-color: ${props => props.primary ? globals.tertiaryColor : globals.auxDarkColor} ;
    color: ${props => props.primary ? globals.auxDarkColor : globals.tertiaryColor};
    border: ${props => props.primary ? 'none' : `1px solid ${globals.tertiaryColor}`};
    border-radius: 0.5rem;
    display: block;
    margin: ${globals.spacing} * 2 auto;
    width: 90%;
    padding: ${globals.spacing}/2;
    font-family: ${globals.primaryFont};
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 0.1rem;
`