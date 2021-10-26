import styled from 'styled-components'
import { globals, mobile } from '../../globals.Style'

export const StyledFavBar = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
`

export const Brand = styled.div`
    width: 100%;
    text-align: center;
    img {
        margin: ${globals.spacing} 0;
        width: 300px;
        ${mobile} {
            width: 400px;
        }
    }
`

export const FavIcon = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    height: 3rem;
    width: 5rem;
    span {
        font-weight: 700;
        font-size: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${globals.primaryColor};
    }
    a {
        text-decoration: none;
    }
`