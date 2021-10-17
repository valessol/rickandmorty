import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavBar from './components/FavBar/FavBar';
import CardList from './components/Cards/CardList';
import SideBarContainer from './containers/SideBar/SideBarContainer';
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import { FavProvider } from './context/FavContext';
import HomeContainer from './containers/Home/HomeContainer';
import { SearchProvider } from './context/SearchContext';

function App() {
    //ok
    const [storageFav, setStorageFav] = useState ()
    //theme y setTheme + handletheme

    const width = window.screen.width

    // const handleInput = (e) => {
    //     setSearch(e.target.value);
    // }

    // useEffect (() =>{
    //     setLocalStorage ('favorites', JSON.stringify(favorites))
    // }, [favorites])


    return (
        <SearchProvider>
            <FavProvider>
                <BrowserRouter>

                    <SideBarContainer width= {width} />

                    <FavBar />
                    
                    <Switch>

                        <Route exact path='/'>
                            <HomeContainer />
                        </Route>

                        <Route exact path='/personajes'>
                            <h1>Personajes</h1>
                            <SearchBar placeholder="Busca tu favorito" />
                            <CardList path="characters" />
                        </Route>

                        <Route exact path='/episodios'>
                            <h1>Episodios</h1>
                            <SearchBar placeholder="Busca por episodio" />
                            <CardList path='episodes' />
                        </Route>

                        <Route exact path='/lugares'>
                            <h1>Lugares</h1>
                            <SearchBar placeholder="Busca por lugar" />
                            <CardList path="locations" /> 
                        </Route>

                    </Switch>

                </BrowserRouter>
            </FavProvider>
        </SearchProvider>
      
    );
}

export default App;
