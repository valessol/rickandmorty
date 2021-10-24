import React, { useContext } from 'react'
import { FavContext } from '../../context/FavContext'
import CardListContainer from '../Cards/CardListContainer'
import { StyledHome } from './HomeContainer.Style'


const HomeContainer = () => {
    //const { favorites } = useContext(FavContext)

    return (
        <StyledHome>
            {
                // favorites.length !== 0
                // ? <h2>Tus favoritos</h2>
                // : <h2>Aún no tienes favoritos. Comienza buscando a tu personaje preferido en la barra de búsqueda, o ve a la sección de personajes</h2>
            }
            <CardListContainer />
        </StyledHome>
    )
}

export default HomeContainer
