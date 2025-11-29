import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


import { use, useState, useEffect } from 'react';

function FilmsTable() {
    const films = [];
    
    return ( 
        <div>
            <div className="card mt-2">
                <DataTable value={films} tableStyle={{ minWidth: '50rem' }}>

                </DataTable>
            </div>

        </div>
    )
}

export default FilmsTable