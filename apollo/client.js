import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

//Headers para la API
const authLink = setContext(async (_req, { headers }) => {
    //const token = await localStorage.getItem('user_token');
    return {
        ...headers
        // headers: {
        //     Authorization: token ? `Bearer ${token}` : '', 
        // },
    };
});

//Link de conexion a la API
const uploadLink = createUploadLink({
    uri: 'https://rickandmortyapi.com/graphql',
}) as unknown as ApolloLink;

//Creacion del cliente apollo
const client = new ApolloClient({
    link: authLink.concat(uploadLink),
    cache: new InMemoryCache(),
});

export default client;