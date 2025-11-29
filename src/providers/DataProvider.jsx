import React, {useState} from 'react'

import { DataContext } from './context.js'

function DataProvider({ children }) {
    const [data, setData] = useState(null);



  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider