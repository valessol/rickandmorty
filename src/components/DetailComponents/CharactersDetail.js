import React from 'react'
import { localData } from '../../helpers/getData'
import { Section } from '../StyledComponents/Section'

const CharactersDetail = ({id}) => {

    const character = (itemId) => {
        return localData('characters').find((item)=>item.id === itemId)
    }

    return (
        <Section>
            
        </Section>
    )
}

export default CharactersDetail
