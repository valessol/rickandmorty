import React, { useContext } from 'react'
import CardList from '../../components/Cards/CardList'
import SearchBar from '../../components/SearchBar/SearchBar'
import { FavContext } from '../../context/FavContext'


const HomeContainer = () => {
    const { favorites } = useContext(FavContext)

    return (
        <>
            {
                            favorites.length !== 0
                            ? <>
                                <h2>Tus favoritos</h2>
                            </>
                            : <>
                                <h2>Aún no tienes favoritos. Comienza buscando a tu personaje preferido en la barra de búsqueda, o ve a la sección de personajes</h2>
                                <SearchBar placeholder="Busca tu favorito" />
                            </>
                        }
                        <CardList 
                            //theme
                        />
        </>
    )
}

export default HomeContainer
