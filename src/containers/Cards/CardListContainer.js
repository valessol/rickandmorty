import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { FavContext } from '../../context/FavContext'
import { SearchContext } from '../../context/SearchContext'

const CardListContainer = () => {
    const [items, setItems] = useState ([])
    const [loading, setLoading] = useState(false);
    const { path } = useParams()

    const { favorites } = useContext(FavContext)
    const { search } = useContext(SearchContext)

    const searchData = (data) => {
        const filterData = data.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
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
                setItems(localData('characters'))
            }
        }
    
        setLoading(false)
    }, [path, search, favorites])

    switch (path) {
        case 'characters': 
            const title = 'Personajes'
            const placeholder = 'Busca a tu favorito'
            break; 
        case 'episodes': 
            const title = 'Episodios'
            const placeholder = 'Busca por episodio'
            break;
        case 'locations':
            const title = 'Lugares'
            const placeholder = 'Busca por ubicación'
            break;
        default: 
            if (favorites.length !== 0) {
                const title = 'Tus favoritos'
            } else {
                const title = 'Aun no tienes favoritos. Busca por nombre en la barra o dirigete a la pestaña de Personajes para comenzar'
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
                        <CardList items={items} />
                    </>
            }
            
        </div>
    )
}

export default CardListContainer
