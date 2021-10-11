import React, { useState, useEffect} from 'react'
import { BsList } from "react-icons/bs";
import SideBar from '../../components/SideBar/SideBar';
import '../../app.scss'


const SideBarContainer = ({width}) => {
    
    

    useEffect(()=>{
        
    }, [])

    return (
        <div>
            {
                width<768 
                ? <BsList />
                : <SideBar />
            }
        </div>
    )
}

export default SideBarContainer
