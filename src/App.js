import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavBar from './components/FavBar/FavBar';
import { FavProvider } from './context/FavContext';
import { SearchProvider } from './context/SearchContext';
import SideBarContainer from './containers/SideBar/SideBarContainer';
import HomeContainer from './containers/Home/HomeContainer';
import { GlobalStyle } from './globals.Style';
import { StyleLayout } from './containers/layout/Layout.Style';
import './app.scss';

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
                <GlobalStyle />

                    <StyleLayout >

                        <SideBarContainer />

                        <FavBar />
                        
                        <Switch>

                            <Route exact path='/:path'>
                                <HomeContainer />
                            </Route>

                            {/* <Route exact path='/personajes'>
                                <h1>Personajes</h1>
                                <SearchBar placeholder="Busca tu favorito" />
                                <CardList path="characters" />
                            </Route> */}

                            {/* <Route exact path='/:path'>
                                <CardListContainer />
                                
                            </Route> */}

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

                    </StyleLayout>

            </BrowserRouter>
            </FavProvider>
        </SearchProvider>
      
    );
}

export default App;
