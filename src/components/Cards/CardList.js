import React from 'react'
import CardComponent from './CardComponent'
import '../../app.scss'

const CardList = ({items, path}) => {
    
    
    return (
        <section className="cardContainer">
            {
                    items &&
                    items.map((item) => {
                        return (
                                    <CardComponent 
                                        key={item.id}
                                        item={item}
                                        path={path}
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
