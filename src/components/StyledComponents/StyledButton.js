import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const StyledPrimaryButton = styled(Button)`
    background-color: $tertiary-color;
    color: $aux-dark-color;
    border: none;
    border-radius: 0.5rem;
    display: block;
    margin: $spacing * 2 auto;
    width: 90%;
    padding: $spacing/2;
    font-family: $primary-font;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 0.1rem;
`

export const StyledSecondaryButton = styled(Button)`
    background-color: $aux-dark-color;
    color: $tertiary-color;
    border: 1px solid $tertiary-color;
    border-radius: 0.5rem;
    display: block;
    margin: $spacing * 2 auto;
    width: 90%;
    padding: $spacing/2;
    font-family: $primary-font;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 0.1rem;
`