import React from 'react'
import { DataProvider } from './context/DataProvider'
import Aside from './pages/Aside'
import Contents from './pages/Contents'

const App = () => {

  return (
    <DataProvider>
      <Aside />
      <Contents />    
    </DataProvider>
  )
}

export default App