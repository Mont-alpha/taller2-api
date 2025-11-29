import React from 'react'
import Navbar from '../components/navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Cristian Montiel</h1>
      <p>El trabajo consiste en una aplicacion que consume la <a href="https://swapi.dev/">API de Star Wars</a> para mostrar peliculas, personajes, naves , planetas y entre otros datos relacionados con la saga.</p>
    </div>
  )
}

export default Home