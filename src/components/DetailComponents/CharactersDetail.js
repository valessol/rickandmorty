import React from 'react'
import { localData } from '../../helpers/getData'
import { Card } from 'react-bootstrap'
import { Section } from '../StyledComponents/Section'
import { StyledCardBody, StyledCardTitle, StyledCardText, StyledCard } from '../Cards/Card.Style'

const CharactersDetail = ({id}) => {

    const findCharacter = (itemId) => {
        return localData('characters').find((item)=>item.id === itemId)
    }

    const character = findCharacter(id)
    console.log(character)

    return (
        <Section>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" />
            <div class="titles">
                <h2>Rick Sanchez</h2>
                <h3>Ubicaciòn: Earth</h3>
            </div>
            <div class="episodes">
                <h3>Episodios:</h3>
                <table>
                    <tr>
                        <th>Capìtulo</th>
                        <th>Nombre</th>
                    </tr>
                    <tr>
                        <td>S01E01</td>
                        <td>Pilot</td>
                    </tr>
                </table>
            </div>
            {/* <StyledCard detailed >

                <Card.Img variant="top" src={character.image} />
                
                <StyledCardBody >

                    <StyledCardTitle >{character.name}</StyledCardTitle>

                    <StyledCardText >
                            Ubicación: {
                                character.location.name === "Earth (Replacement Dimension)"
                                ? "Earth"
                                : character.location.name
                            } 
                    </StyledCardText>


                    
                </StyledCardBody>
            </StyledCard> */}
        </Section>
    )
}

export default CharactersDetail
