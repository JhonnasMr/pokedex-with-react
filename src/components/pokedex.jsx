import React, { useEffect } from 'react'
import Header from './header/header'
import useStore from '../contexts/useStore'
import SearchBar from './searchBar/searchBar'
import useFetchApi from '../hooks/useFetchApi'
import Cards from './card/cards'
import Loader from './loader/loader'
import background_sound from '/PokemonIChooseYou_soundtrack.mp3'

function Pokedex() {

  const userName = useStore(e => e.userName)
  const globalData = useStore(e => e.data)
  const setGlobalData = useStore(e => e.setData)
  const dataSearch = useStore(e => e.search.searchByName)

  const audio_background = useStore(e => e.audio_background)
  const setAudio_background = useStore(e => e.setAudio_background)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  const {data, isPending, getData} = useFetchApi()

  const playAudio = () => {
    const audio = new Audio(background_sound);
    audio.loop = true;
    audio.volume = 0.2;
    audio.play().catch(error => console.error("Error al reproducir el audio:", error));
  }

  useEffect(() => {
    getData(url)
  },[])
  
  useEffect(() => {
    setGlobalData(data)
    if(audio_background){
      playAudio()
      setAudio_background()
    }
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