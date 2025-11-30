import React,{useEffect,useContext, useState} from 'react'
import FilmsTable from '../components/table.jsx'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataContext } from '../providers/context';

function FilmsTableContainer() {
    const { obtenerPeliculasPorActor,obtenerPeliculas,obtenerActores,dataFilms, dataActors, obtenerNaves, obtenerPlanetas, dataNaves, dataPlanetas } = useContext(DataContext);
    const [actor, setActor] = useState(null);
    //para cambiar el estado de la tabla
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // va a esperar que cargue los datos, para que no haya problemas con el filtro de los distintos tipos de datos
        const awaitData = async () => {
            setLoading(true);
            await Promise.all([
                obtenerPeliculas(),
                obtenerActores(),
                obtenerNaves(),
                obtenerPlanetas()
            ]);
            setLoading(false);
        };
        awaitData();
    }, []);

    const handleFilter = async () => {
        // esto es para que la tabla muestre un loading mientras se obtienen los datos
        setLoading(true);
        if (actor) {
            // separo la url del actor
            const urlDesacoplado = actor.url.split('/');
            // obtengo el id de la url
            const id = urlDesacoplado[urlDesacoplado.length - 2];
            await obtenerPeliculasPorActor(id);
        } else {
            await obtenerPeliculas();
        }
        setLoading(false);
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
      <FilmsTable films={dataFilms} personajes={dataActors} naves={dataNaves} planetas={dataPlanetas} loading={loading} />
    </div>
  )
}

export default FilmsTableContainer