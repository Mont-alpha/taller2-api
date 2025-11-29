import React, {useState} from 'react'

import { DataContext } from './context.js'
// importo las funciones agregando el alias para evitar conflictos de nombres
import { obtenerPeliculas as getPeliculasService, obtenerActores as getActoresService, obtenerPeliculasPorActor as getPeliculasPorActorService } from '../services/dataservice.js'

function DataProvider({ children }) {
  const [dataFilms, setDataFilms] = useState([])
  const [dataActors, setDataActors] = useState([])
  
  const obtenerPeliculasPorActor = async (actor) => {
    const peliculas = await getPeliculasPorActorService(actor);
    setDataFilms(peliculas);
  }
  const obtenerPeliculas = async () => {
    const peliculas = await getPeliculasService();
    setDataFilms(peliculas.results);
  }

  const obtenerActores = async () => {
    const actores = await getActoresService();
    setDataActors(actores.results);
    return actores;
  }



  return (
    <DataContext.Provider value={{obtenerPeliculasPorActor,obtenerPeliculas,obtenerActores,dataFilms, dataActors, setDataActors}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider