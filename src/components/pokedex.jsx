import React, { useEffect } from 'react'
import Header from './header/header'
import useStore from '../contexts/useStore'
import SearchBar from './searchBar/searchBar'
import useFetchApi from '../hooks/useFetchApi'
import Cards from './card/cards'
import Loader from './loader/loader'

function Pokedex() {

  const userName = useStore(e => e.userName)
  const globalData = useStore(e => e.data)
  const setGlobalData = useStore(e => e.setData)
  const dataSearch = useStore(e => e.search.searchByName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  const {data, isPending, getData} = useFetchApi()

  useEffect(() => {
    getData(url)
  },[])
  
  useEffect(() => {
    setGlobalData(data)
  },[data])

  return (
    <>
      <Header/>
      <SearchBar userName={userName}/>
      <main className='main'>
        {
          !dataSearch ?
            isPending ? <Loader/>
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