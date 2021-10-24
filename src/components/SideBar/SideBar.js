import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../app.scss'

const SideBar = () => {
    return (
        <nav className="sidebar">
            <NavLink to="/" exact activeClassName="sidebar--active">Dashboard</NavLink>
            <NavLink to="/characters" activeClassName="sidebar--active">Personajes</NavLink>
            <NavLink to="/episodes" activeClassName="sidebar--active">Episodios</NavLink>
            <NavLink to="/locations" activeClassName="sidebar--active">Lugares</NavLink>
        </nav>
    )
}

export default SideBar
