import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavBar from '../components/FavBar/FavBar';
import CardList from '../components/Cards/CardList';
import SideBarContainer from '../containers/SideBar/SideBarContainer';
import SearchBar from '../components/SearchBar/SearchBar';
import HomeContainer from '../containers/Home/HomeContainer';
import CardListContainer from '../containers/Cards/CardListContainer';


const Layout = () => {
    return (
        <BrowserRouter>
            <div className="layout">

                    <SideBarContainer />

                    <FavBar />
                    
                    <Switch>

                        {/* <Route exact path='/'>
                            <HomeContainer />
                        </Route> */}

                        {/* <Route exact path='/personajes'>
                            <h1>Personajes</h1>
                            <SearchBar placeholder="Busca tu favorito" />
                            <CardList path="characters" />
                        </Route> */}

                        <Route exact path='/:path'>
                            <CardListContainer />
                            
                        </Route>

                        {/* <Route exact path='/episodios'>
                            <h1>Episodios</h1>
                            <SearchBar placeholder="Busca por episodio" />
                            <CardList path='episodes' />
                        </Route>

                        <Route exact path='/lugares'>
                            <h1>Lugares</h1>
                            <SearchBar placeholder="Busca por lugar" />
                            <CardList path="locations" /> 
                        </Route> */}

                    </Switch>

                </div>
            </BrowserRouter>
    )
}

export default Layout
