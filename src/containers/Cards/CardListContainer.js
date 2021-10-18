import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import CardList from '../../components/Cards/CardList'
import SearchBar from '../../components/SearchBar/SearchBar'
import { FavContext } from '../../context/FavContext'
import { SearchContext } from '../../context/SearchContext'
import { localData } from '../../helpers/getData'

const CardListContainer = () => {
    const [items, setItems] = useState ([])
    const [loading, setLoading] = useState(false);
    const { path } = useParams()

    const { favorites } = useContext(FavContext)
    const { search } = useContext(SearchContext)

    const searchData = (data) => {
        const filterData = data.filter((e)=> e.name.toLowerCase().includes(search.toLowerCase()))
        return setItems(filterData)
    }

    useEffect(()=>{
        setLoading(true);

         if (path) {

            //Obtener datos
             const data = localData(path)
             //Filtrar por bùsqueda, si existe
             search && search.length >= 3
             ? searchData(data)
             : setItems(data)

        } else if (path === undefined) {

            if (favorites && favorites.length !== 0) {
                setItems(favorites)
            } else {
                setItems(localData('characters'))//Pagina 404
            }
        }
    
        setLoading(false)
    }, [path, search, favorites])

    let title, placeholder;

    switch (path) {
        case 'characters': 
            title = 'Personajes'
            placeholder = 'Busca a tu favorito'
            break; 
        case 'episodes': 
            title = 'Episodios'
            placeholder = 'Busca por episodio'
            break;
        case 'locations':
            title = 'Lugares'
            placeholder = 'Busca por ubicación'
            break;
        default: 
            if (favorites.length !== 0) {
                title = 'Tus favoritos'
            } else {
                title = 'Aun no tienes favoritos. Busca por nombre en la barra o dirigete a la pestaña de Personajes para comenzar'
            } break;
    }

    return (
        <div>
            <h1>{title}</h1>
            {
                loading 
                ? <h2>Cargando...</h2>
                : 
                    <>
                        <SearchBar placeholder={placeholder} />
                        <CardList items={items} path={path} />
                    </>
            }
            
        </div>
    )
}

export default CardListContainer
