import React from 'react'
import CardComponent from './CardComponent'
import '../../app.scss'

const CardList = ({items}) => {
    
    // useEffect(()=>{
    //     setLoading(true);
        
    //     if (path === 'characters' || path === 'episodes' || path === 'locations') {
    //         const data = localData(path)

    //         if (search.length >=3) {
    //             const filterData = data.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
    //             //console.log(filterData)
    //             setCharacters(filterData);
    //         } else {
    //             setCharacters(data)
    //         } 
    //     } else if (favorites && favorites.length !==0 ) {
    //         setCharacters(favorites);
    //         //console.log('estoy en favoritos')
    //     }

    //     // if (path === 'characters') {
    //     //     const data = localData('characters');
    //     //     if (search.length >=3) {
    //     //         const filterData = data.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
    //     //         //console.log(filterData)
    //     //         setCharacters(filterData);
    //     //     } else {
    //     //         setCharacters(data)
    //     //     } 
    //     //     //console.log('estoy en personajes')
    //     // } else if (favorites && favorites.length !==0 ) {
    //     //     setCharacters(favorites);
    //     //     console.log('estoy en favoritos')
    //     // }
    //     // const data = localData('characters');
    //     // console.log(search)
    //     // setCharacters(data);
       
        
    //     //Obtener datos del localStorage4653 14614
        

    //     // switch (path) {
    //     //     case 'characters': 
    //     //             setCharacters(localData('characters'))
    //     //             setLoading(false);
    //     //             break;
    //     //     case 'episodes':
    //     //             setCharacters(localData('episodes'));
    //     //             break;
    //     //     case 'locations':
    //     //             setCharacters(localData('locations'));
    //     //             break;
    //     //     default: if (favorites && favorites.length !== 0) {
    //     //                 setCharacters(favorites)
    //     //                 setLoading(false)
    //     //             } else {
    //     //                 setCharacters(localData('characters'))
    //     //                 setLoading(false);
    //     //             } break;
    //     // }
    //     setLoading(false)
    // }, [path, search, favorites])

    return (
        <section className="cardContainer">
            {
                    items &&
                    items.map((item) => {
                        return (
                                    <CardComponent 
                                        key={item.id}
                                        item={item}
                                        {...item} 
                                        //handlefav
                                        //theme
                                    />
                        )
                    })
            }   
        </section>
    )
}

export default CardList;
