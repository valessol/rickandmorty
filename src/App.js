import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavBar from './components/FavBar/FavBar';
import CardContainer from './containers/Cards/CardContainer';
import SideBarContainer from './containers/SideBar/SideBarContainer';
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

function App() {
    const [favorites, setFavorites] = useState([]);
    const width = window.screen.width

    

    return (
        <BrowserRouter>
            <SideBarContainer width= {width}/>
            <FavBar 
                favorites = {favorites}
            />
            <SearchBar />
            <Switch>
                <Route exact path='/'>
                    <CardContainer 
                      favorites = {favorites}
                      setFavorites = {setFavorites}
                    />
                </Route>
                <Route exact path='/personajes'>
                    <h1>Personajes</h1>
                    <CardContainer path="characters" />
                </Route>
                <Route exact path='/episodios'>
                    <h1>Episodios</h1>
                    {/* <CardContainer path='episode' /> */}
                </Route>
                <Route exact path='/lugares'>
                    <h1>Lugares</h1>
                    {/* <CardContainer path="location" /> */}
                </Route>
            </Switch>
        </BrowserRouter>
      
    );
}

export default App;
