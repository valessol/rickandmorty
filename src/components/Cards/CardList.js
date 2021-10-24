import React from 'react'
import CardComponent from './CardComponent'
import '../../app.scss'
import { Section } from '../StyledComponents/Section'

const CardList = ({items, path}) => {
    
    
    return (
        <Section >
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
        </Section>
    )
}

export default CardList;
