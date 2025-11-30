import React, {useState} from 'react'

import { DataContext } from './context.js'
// importo las funciones agregando el alias para evitar conflictos de nombres
import { 
  obtenerPeliculas as getPeliculasService, 
  obtenerActores as getActoresService, 
  obtenerPeliculasPorActor as getPeliculasPorActorService,
  obtenerNaves as obtenerNavesService,
  obtenerPlanetas as obtenerPlanetasService

} from '../services/dataservice.js'

function DataProvider({ children }) {
  const [dataFilms, setDataFilms] = useState([])
  const [dataActors, setDataActors] = useState([])
  const [dataNaves, setDataNaves] = useState([])
  const [dataPlanetas, setDataPlanetas] = useState([])

  const obtenerPeliculasPorActor = async (actor) => {
    const peliculas = await getPeliculasPorActorService(actor);
    setDataFilms(peliculas);
  }
  const obtenerPeliculas = async () => {
    const peliculas = await getPeliculasService();
    setDataFilms(peliculas);
  }

  //cambiar este metodo para que devuelva los directores, ya que devuelve a los personajes (character == personaje), no hay para actores/actrices
  const obtenerActores = async () => {
    const actores = await getActoresService();
    setDataActors(actores);
    return actores;
  }

  const obtenerNaves = async () => {
    const naves = await obtenerNavesService();
    setDataNaves(naves);
  }

  const obtenerPlanetas = async () => {
    const planetas = await obtenerPlanetasService();
    setDataPlanetas(planetas);
  }

  return (
    <DataContext.Provider value={{obtenerPeliculasPorActor,obtenerPeliculas,obtenerActores,dataFilms, dataActors, setDataActors, dataNaves, dataPlanetas, obtenerNaves, obtenerPlanetas}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider