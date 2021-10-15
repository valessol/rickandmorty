import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavBar from './components/FavBar/FavBar';
import CardList from './components/Cards/CardList';
import SideBarContainer from './containers/SideBar/SideBarContainer';
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import { setLocalStorage } from './helpers/storage';
import './App.css';

function App() {
    const [favorites, setFavorites] = useState([]);//ok
    const [storageFav, setStorageFav] = useState ()
    //theme y setTheme + handletheme
    const [search, setSearch] = useState('');
    const width = window.screen.width

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    useEffect (() =>{
        setLocalStorage ('favorites', JSON.stringify(favorites))
    }, [favorites])


    return (
        <BrowserRouter>
            <SideBarContainer width= {width}/>
            <FavBar 
                favorites = {favorites}
            />
            
            <Switch>
                <Route exact path='/'>
                    {
                        favorites.length !== 0
                        ? <>
                            <h2>Tus favoritos</h2>
                        </>
                        : <>
                            <h2>Aún no tienes favoritos. Comienza buscando a tu personaje preferido en la barra de búsqueda, o ve a la sección de personajes</h2>
                            <SearchBar 
                                handleInput={handleInput}
                                placeholder="Busca tu favorito"
                            />
                        </>
                    }
                    <CardList 
                        favorites = {favorites}
                        setFavorites = {setFavorites}
                        search={search}
                        //theme
                    />
                    
                </Route>
                <Route exact path='/personajes'>
                    <h1>Personajes</h1>
                    <SearchBar 
                        handleInput={handleInput}
                        placeholder="Busca tu favorito"
                    />
                    <CardList 
                        path="characters"
                        favorites={favorites}
                        setFavorites={setFavorites} 
                        search={search}
                    />
                </Route>
                <Route exact path='/episodios'>
                    <h1>Episodios</h1>
                    <SearchBar 
                        handleInput={handleInput}
                        placeholder="Busca por episodio"
                    />
                    <CardList path='episodes' />
                </Route>
                <Route exact path='/lugares'>
                    <h1>Lugares</h1>
                    <SearchBar 
                        handleInput={handleInput}
                        placeholder="Busca por lugar"
                    />
                    <CardList path="locations" /> 
                </Route>
            </Switch>
        </BrowserRouter>
      
    );
}

export default App;
