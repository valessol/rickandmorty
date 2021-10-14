// export const getData = async () => {
//     const baseUrl = 'https://rickandmortyapi.com/api/';

//     const dataResponse = await fetch(baseUrl+'character');
//     const data = await dataResponse.json()
//     return data.results;


// }
import {data} from '../data/data';
import { getLocalStorage, setLocalStorage } from './storage';

const getData = async () => {
    return new Promise ((resolve, reject) => {
        const characters = data.characters.results;
        const locations = data.locations.results;
        const episodes = data.episodes.results;

        const allData = {characters, locations, episodes}
        resolve(allData)
    })
}

getData()
    .then(res =>{
        setLocalStorage('characters', JSON.stringify(res.characters))
        setLocalStorage('locations', JSON.stringify(res.locations))
        setLocalStorage('episodes', JSON.stringify(res.episodes))
    }) 
    .catch(err=> err)

export const localData = (dataType) => {
    const JSONdata = getLocalStorage(dataType);
    const OBJdata = JSON.parse(JSONdata);
    return OBJdata;
}





