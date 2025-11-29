import axios from 'axios';

const API_URL = 'https://swapi.dev/api/';


export const obtenerPeliculas = async (actorID) => {
  try {
    const response = await axios.get(API_URL+'films/');
    return response.data;
  } catch (error) {
    console.error('Error al consultar los datos:', error);
    throw error;
  }
};

export const obtenerActores = async () => {
    try {
        const response = await axios.get(API_URL+'people/');
        return response.data;
    } catch (error) {
        console.error('Error al consultar los personajes de la saga:', error);
        throw error;
    }
};

export const obtenerNaves = async () => {
    try {
        const response = await axios.get(API_URL+'starships/');
        return response.data;
    } catch (error) {
        console.error('Error al consultar las naves de la saga:', error);
        throw error;
    }
};
export const obtenerPlanetas = async () => {
    try {
        const response = await axios.get(API_URL+'planets/');
        return response.data;
    } catch (error) {
        console.error('Error al consultar los planetas de la saga:', error);
        throw error;
    }
};

export const obtenerPeliculasPorActor = async (actorID) => {
  try {
    const response = await axios.get(`${API_URL}people/${actorID}/`);
    const filmUrls = response.data.films;
    // obtengo lista de api de las peliculas asociadas al actor
    const filmMap = filmUrls.map(url => axios.get(url));
    // espero a que las promesas devuelvan las peliculas
    const filmResponses = await Promise.all(filmMap);
    return filmResponses.map(res => res.data);
    } catch (error) {
    console.error('Error al consultar las peliculas del actor:', error);
    throw error;
  }
};