import axios from 'axios';

const API_URL = 'https://swapi.dev/api/';


const obtenerTodosLosDatos = async (url) => {
    let resultadosCompletos = [];
    let siguientePagina = url;
    while (siguientePagina) { // se mantiene hasta que no haya mas paginas
        const response = await axios.get(siguientePagina);
        const resultado = response.data.results;
        resultadosCompletos = [...resultadosCompletos, ...resultado];
        siguientePagina = response.data.next; //null o siguiente url
    }
    return resultadosCompletos;
};

export const obtenerPeliculas = async (actorID) => {
  try {
    return await obtenerTodosLosDatos(API_URL+'films/');
  } catch (error) {
    console.error('Error al consultar los datos:', error);
    throw error;
  }
};

export const obtenerActores = async () => {
    try {
        return await obtenerTodosLosDatos(API_URL+'people/');
    } catch (error) {
        console.error('Error al consultar los personajes de la saga:', error);
        throw error;
    }
};

export const obtenerNaves = async () => {
    try {
        return await obtenerTodosLosDatos(API_URL+'starships/');
    } catch (error) {
        console.error('Error al consultar las naves de la saga:', error);
        throw error;
    }
};
export const obtenerPlanetas = async () => {
    try {
        return await obtenerTodosLosDatos(API_URL+'planets/');
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