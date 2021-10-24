import styled from 'styled-components'
import { globals, tablet } from '../../globals.Style'

export const Nav = styled.nav`
    display: none;
    a {
        display: block;
        text-align: left;
        font-size: 2rem;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
        color: ${globals.auxDarkColor};
        margin: ${globals.spacing} 0;
        &:hover {
            color: ${globals.primaryColor};
        }
    }
    ${tablet} {
        display: block;
        padding: ${globals.spacing}*2;
        padding-top: ${globals.spacing}*5;
        background-color: ${globals.tertiaryColor};
        width: 20%;
        height: 100vh;
        position: fixed;
    }
    .sidebar--active {
        color: ${globals.primaryColor};
    }
`