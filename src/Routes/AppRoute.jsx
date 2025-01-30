import React from 'react'
import { Route, Routes } from 'react-router'

import Login from '../components/login'
import Pokedex from '../components/pokedex'
import ProtectedComponent from './ProtectedComponent'
import CardDetails from '../components/cardDetails'

function AppRoute() {
  return (
    <>
    <Routes>
        <Route index path='/' element={<Login/>}/>
        
        <Route path='/pokedex'>
          <Route index element={
            <ProtectedComponent>
              <Pokedex/>
            </ProtectedComponent>
          }/>

          <Route 
            path='/pokedex/:id'
            element={
              <ProtectedComponent>
              <CardDetails/>
            </ProtectedComponent>
          }/>
        </Route>

    </Routes>
    </>
  )
}

export default AppRoute