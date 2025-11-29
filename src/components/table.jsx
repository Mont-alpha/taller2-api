import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

function FilmsTable({ films,personajes, naves, planetas }) {
    const tagStyle = { marginRight: '5px', marginBottom: '5px' };
    //funcion general para obtener el nombre del personaje/nave/planeta a partir de la url
    const obtenerNombre = (url,listaUsada,tipo) => {
        // obtengo el id de uno de los personajes de la pelicula
        const obtenerID = (url) => {
            const urlDesacoplado = url.split('/');
            return urlDesacoplado[urlDesacoplado.length - 2];
        }   
        // retorna la coincidencia 
        const id = obtenerID(url);
        const nombre = listaUsada?.find((p) => {
            const pId = obtenerID(p.url);
            return pId === id;
        });
        // si encuentra el personaje, retorna su nombre en el tag
        return nombre ? (
            <Tag key={id+'-'+tipo} severity="info" style={tagStyle}>{nombre.name}</Tag>
        ) : (
            <Tag key={id+'-'+tipo} severity="danger" style={tagStyle}>No encontrado</Tag>
        );
    }

    const personasTemplate = (pelicula) => {
        return (
            <div>
                <div className="flex flex-wrap gap-2">
                {pelicula.characters.map((urlPersonaje) => {
                    return obtenerNombre(urlPersonaje,personajes,'personaje');
                }
                )}
                </div>
            </div>
        );
    }
    const navesTemplate = (pelicula) => {
        return (
            <div>
                <div className="flex flex-wrap gap-2">
                {pelicula.starships.map((urlNave) => {
                    return obtenerNombre(urlNave,naves,'nave');
                }
                )}
                </div>
            </div>
        );
    }
    const planetasTemplate = (pelicula) => {
        return (
            <div>
                <div className="flex flex-wrap gap-2">
                {pelicula.planets.map((urlPlaneta) => {
                    return obtenerNombre(urlPlaneta,planetas,'planeta');
                }
                )}
                </div>
            </div>
        );
    }
    
    return ( 
        <div>
            <div className="card mt-2">
                <DataTable value={films} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="title" header="Title"></Column>
                    <Column field="episode_id" header="Episodio"></Column>
                    <Column field="release_date" header="Fecha de lanzamiento"></Column>
                    <Column field="director" header="Director"></Column>
                    <Column field="producer" header="Productor"></Column>
                    <Column header="Personajes" body={personasTemplate}></Column>
                    <Column header="Naves" body={navesTemplate} > </Column>
                    <Column header="Planetas" body={planetasTemplate} > </Column>
                </DataTable>
            </div>

        </div>
    )
}

export default FilmsTable