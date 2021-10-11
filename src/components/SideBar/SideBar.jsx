import React from 'react'
import { Link } from 'react-router-dom'
import '../../app.scss'

const SideBar = () => {
    return (
        <nav className="sidebar">
            <Link to="/">Dashboard</Link>
            <Link to="/personajes">Personajes</Link>
            <Link to="/episodios">Episodios</Link>
            <Link to="/lugares">Lugares</Link>
        </nav>
    )
}

export default SideBar
