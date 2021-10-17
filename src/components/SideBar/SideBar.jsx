import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../app.scss'

const SideBar = () => {
    return (
        <nav className="sidebar">
            <NavLink to="/" exact activeClassName="sidebar--active">Dashboard</NavLink>
            <NavLink to="/personajes" activeClassName="sidebar--active">Personajes</NavLink>
            <NavLink to="/episodios" activeClassName="sidebar--active">Episodios</NavLink>
            <NavLink to="/lugares" activeClassName="sidebar--active">Lugares</NavLink>
        </nav>
    )
}

export default SideBar
