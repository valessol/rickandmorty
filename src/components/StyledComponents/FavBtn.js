import { BsSuitHeartFill } from 'react-icons/bs'
import styled from 'styled-components'

export const FavBtn = styled(BsSuitHeartFill)`
    position: absolute;
    top: 0;
    right: 0;
    color: $primary-color;
    opacity: 0;
`

export const FavBtnActive = styled(BsSuitHeartFill)`
    position: absolute;
    top: 0;
    right: 0;
    color: $primary-color;
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