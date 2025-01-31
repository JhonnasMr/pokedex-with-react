import React, { useEffect } from 'react'
import { NavLink } from 'react-router'
import Header from './header'
import useStore from '../contexts/useStore'
import SearchBar from './searchBar'
import useFetchApi from '../hooks/useFetchApi'
import Cards from './cards'


function Pokedex() {

  const userName = useStore(e => e.userName)
  const globalData = useStore(e => e.data)
  const setGlobalData = useStore(e => e.setData)

  const dataSearch = useStore(e => e.search.searchByName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  const {data, error, isPending, getData} = useFetchApi()

  useEffect(() => {
    getData(url)
  },[])
  
  useEffect(() => {
    setGlobalData(data)
  },[data])

  return (
    <>
      <Header/>
      <h3>Bienvenido {userName}, aqui podras encontrar a tu Pokemon favorito!</h3>
      <SearchBar />
      <main>
        {
          !dataSearch ?
            isPending ? <h1>Loading...</h1>
            : globalData?.results ? <Cards data={globalData.results}/>
            : globalData?.pokemon ? <Cards data={globalData}/>
            : <Cards data={globalData}/>
          :dataSearch && <Cards pokemon={dataSearch}/>
        }
      </main>
    </>
  )
}

export default Pokedex