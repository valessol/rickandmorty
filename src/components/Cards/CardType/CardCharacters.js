import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import { FavContext } from '../../../context/FavContext';
import { StyledCard, StyledCardBody, StyledCardText, StyledCardTitle } from '../../StyledComponents/StyledCard';
import { StyledPrimaryButton, StyledSecondaryButton } from '../../StyledComponents/StyledButton';
import { FavBtn, FavBtnActive } from '../../StyledComponents/FavBtn';

const CardCharacters = ({id, image, name, location, episode }) => {
    const { addFavorites, removeFavorites, itemAddedToFavorites } = useContext(FavContext)

    const newItem = {
        id,
        image,
        name,
        location,
        episode
    }

    const handleAddFavorites = () => {
        //const fav = item.find((e)=>e.id === id);
        addFavorites(newItem)
    }

    const handleRemoveFavorites = (id) => {
        removeFavorites(id)
    }

    return (
        <StyledCard >

            <Card.Img variant="top" src={image} />

            {
                !itemAddedToFavorites(id)
                ? <FavBtn />
                : <FavBtnActive />
            } 
            
            <StyledCardBody >

                <StyledCardTitle >{name}</StyledCardTitle>

                <StyledCardText >
                        Ubicación: {
                            location.name === "Earth (Replacement Dimension)"
                            ? "Earth"
                            : location.name
                        } 
                </StyledCardText>

                <StyledCardText >
                        Aparece en {
                            episode.length === 1
                            ? episode.length + ' episodio'
                            : episode.length + ' episodios'
                        }
                </StyledCardText>

                <StyledPrimaryButton >Ver Detalle</StyledPrimaryButton>
                {/* A este button le enlazo el Link que es el que va a recibir el params, o a enviar el params (el id de lo que debe mostrar) mejor dicho al componente app para que el router lo muestre en la vista de detalle */}
                {
                    !itemAddedToFavorites(id)
                    ? (
                            <StyledSecondaryButton 
                                onClick={()=> handleAddFavorites()}
                            >Agregar a favoritos
                            </StyledSecondaryButton>
                    ) 
                    : (
                        <StyledSecondaryButton  
                            onClick={()=> handleRemoveFavorites(id)}
                        >Quitar de favoritos
                        </StyledSecondaryButton>
                    )
                }
            </StyledCardBody>
        </StyledCard>
    )
}

export default CardCharacters
