import React, { useState, useEffect} from 'react'
import { BsList } from "react-icons/bs";
import SideBar from '../../components/SideBar/SideBar';
import { StyledSideBar } from './SideBarContainer.Style';
import '../../app.scss'


const SideBarContainer = ({width}) => {
    
    

    useEffect(()=>{
        
    }, [])

    return (
        <StyledSideBar>
            {
                width<768 
                ? <BsList />
                : <SideBar />
            }
        </StyledSideBar>
    )
}

export default SideBarContainer
