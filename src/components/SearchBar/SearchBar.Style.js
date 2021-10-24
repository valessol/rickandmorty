import styled from 'styled-components'
import { globals, mobile } from '../../globals.Style'
import { StyledButton } from '../StyledComponents/Button.Style'

export const StyledSearchBar = styled.div`
    width: 100%;
    text-align: center;
    input {
        padding: ${globals.spacing};
        border-radius: 0.5rem;
        border: 1px solid ${globals.secondaryColor};
        text-transform: uppercase;
        font-family: ${globals.primaryFont};
        font-size: 1.8rem;
        font-weight: 700;
        letter-spacing: 0.1rem;
        width: 90%;
        text-align: left;
        ${mobile} {
            width: 60%;
            margin-right: ${globals.spacing};
        }
        &:focus {
            background-color: ${globals.tertiaryColor};
            color: ${globals.auxDarkColor};        
        }
    }
`

export const SearchButton = styled(StyledButton)`
    padding: ${globals.spacing};
    margin-top: 1rem;
    ${mobile} {
        display: inline-block;
        width: 150px;
    }
`