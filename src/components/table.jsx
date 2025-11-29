import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

function FilmsTable({ films,personajes }) {
    const  peliculas = films;
    const obtenerID = (url) => {
        const urlDesacoplado = url.split('/');
        return urlDesacoplado[urlDesacoplado.length - 2];
    }
    const nombrePersonaje = (id) => {
        // personajes es un array de objetos
        const actor = personajes.find((p) => {
            const pId = obtenerID(p.url);
            return pId === id;
        });
        // si encuentra el personaje, retorna su nombre
        return actor ? actor.name : null; // operacion ternaria
    }

    const personasTemplate = (pelicula) => {
        const tagStyle = { marginRight: '5px', marginBottom: '5px' };
        return (
            <div>
                <div className="flex flex-wrap gap-2">
                {pelicula.characters.map((urlPersonaje) => {
                    // obtengo el id de uno de los personajes de la pelicula
                    const id = obtenerID(urlPersonaje);
                    // busco nombre del personaje por id
                    const actor = nombrePersonaje(id);
                    return actor ? (
                        <Tag key={id} icon="pi pi-user" severity="info" style={tagStyle}>{actor}</Tag>
                    ) : null;
                }
                )}
                </div>
            </div>
        );
    }

    
    return ( 
        <div>
            {}
            <div className="card mt-2">
                <DataTable value={peliculas} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="title" header="Title"></Column>
                    <Column field="director" header="Director"></Column>
                    <Column field="producer" header="Productor"></Column>
                    <Column header="Personajes" body={personasTemplate}></Column>
                </DataTable>
            </div>

        </div>
    )
}

export default FilmsTable