import styled from 'styled-components'
import { globals } from '../../globals.Style'
import { Button } from 'react-bootstrap'

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
