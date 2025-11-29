import React,{useEffect,useContext, useState} from 'react'
import FilmsTable from '../components/table.jsx'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataContext } from '../providers/context';

function FilmsTableContainer() {
    const { obtenerPeliculasPorActor,obtenerPeliculas,obtenerActores,dataFilms, dataActors, obtenerNaves, obtenerPlanetas, dataNaves, dataPlanetas } = useContext(DataContext);
    const [actor, setActor] = useState(null);

    useEffect(() => {
        obtenerPeliculas();
        obtenerActores();
        obtenerNaves();
        obtenerPlanetas();
        console.log(dataFilms);
        
    }, []);

    const handleFilter = () => {
        if (actor) {
            // separo la url del actor
            const urlDesacoplado = actor.url.split('/');
            // obtengo el id de la url
            const id = urlDesacoplado[urlDesacoplado.length - 2];
            obtenerPeliculasPorActor(id);
            console.log(dataFilms);
        } else {
            obtenerPeliculas();
        }
    }

  return (
    <div>
        <div className="flex gap-2 mb-3 align-items-center">
            <Dropdown 
                value={actor}
                onChange={(e) => setActor(e.value)}
                options={dataActors}
                optionLabel="name" 
                placeholder="Seleccione un personaje" 
                showClear
                className="mr-2 mt-4"
            />
            <Button  label="Filtrar" onClick={handleFilter} />
        </div>
      <FilmsTable films={dataFilms} personajes={dataActors} naves={dataNaves} planetas={dataPlanetas} />
    </div>
  )
}

export default FilmsTableContainer