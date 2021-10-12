// export const getData = async () => {
//     const baseUrl = 'https://rickandmortyapi.com/api/';

//     const dataResponse = await fetch(baseUrl+'character');
//     const data = await dataResponse.json()
//     return data.results;


// }
import {data} from '../data/data';
import { getLocalStorage, setLocalStorage } from './storage';

const getData = async () => {
    // let location = [];
    // let episodes = [];
    return new Promise ((resolve, reject) => {
        // const info = data.characters.results
        // info.forEach((element)=>{
        //     location = [...location, element.location];
        //     episodes = [...episodes, element.episode]
        // })
        // console.log(location)
        // console.log(episodes)
        resolve(data.characters.results)
    })
}

getData()
    .then(res =>{
        setLocalStorage('characters', JSON.stringify(res))
    }) 
    .catch(err=> err)

export const localData = () => {
    const JSONdata = getLocalStorage('characters');
    const OBJdata = JSON.parse(JSONdata);
    return OBJdata;
}





