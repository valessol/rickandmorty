import React, { useContext } from 'react'
import { FavContext } from '../../context/FavContext'
import CardListContainer from '../Cards/CardListContainer'


const HomeContainer = () => {
    //const { favorites } = useContext(FavContext)

    return (
        <main className="layout__main">
            {
                // favorites.length !== 0
                // ? <h2>Tus favoritos</h2>
                // : <h2>Aún no tienes favoritos. Comienza buscando a tu personaje preferido en la barra de búsqueda, o ve a la sección de personajes</h2>
            }
            <CardListContainer />
        </main>
    )
}

export default HomeContainer
