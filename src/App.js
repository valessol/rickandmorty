import { useState } from 'react'
import { FavProvider } from './context/FavContext';
import { SearchProvider } from './context/SearchContext';
import Layout from './layout/Layout';
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
                <Layout />
            </FavProvider>
        </SearchProvider>
      
    );
}

export default App;
