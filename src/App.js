import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavBar from './components/FavBar/FavBar';
import CardList from './components/Cards/CardList';
import SideBarContainer from './containers/SideBar/SideBarContainer';
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

function App() {
    const [favorites, setFavorites] = useState([]);//ok
    //theme y setTheme + handletheme
    const [search, setSearch] = useState('');
    const width = window.screen.width

    const handleInput = (e) => {
        console.log(e.target.value);
        if (e.target.value.length >=3) setSearch(search);
    }


    return (
        <BrowserRouter>
            <SideBarContainer width= {width}/>
            <FavBar 
                favorites = {favorites}
            />
            <SearchBar handleInput={handleInput}/>
            <Switch>
                <Route exact path='/'>
                    <CardList 
                      favorites = {favorites}//ok
                      setFavorites = {setFavorites}//ok
                      search={search}
                      //theme
                    />
                </Route>
                {/* <Route exact path='/personajes'>
                    <h1>Personajes</h1>
                    <CardContainer path="characters" />
                </Route>
                <Route exact path='/episodios'>
                    <h1>Episodios</h1>
                    {/* <CardContainer path='episode' />
                </Route>
                <Route exact path='/lugares'>
                    <h1>Lugares</h1>
                    <CardContainer path="location" /> 
                </Route> */}
            </Switch>
        </BrowserRouter>
      
    );
}

export default App;
