import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { getColor } from '../tools'
import useFetchApi from '../hooks/useFetchApi'
import { useNavigate } from 'react-router'
import Header from './header/header'
import './cardDetails.css'

function CardDetails() {
  const {id} = useParams()
  const audioRef = useRef()
  const {data, getData} = useFetchApi()
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

  const [showShiny, setShowShiny] = useState(false)
  const navigate = useNavigate()

  const handleAudio = () => {
    const pokemonDom = document.querySelector('.pokedex-window__img')
    pokemonDom.classList.add('movin')
    audioRef.current.play()
    setTimeout(() => {
      pokemonDom.classList.remove('movin')
    }, 800)
  }

  const getNextPokemon = () => {
    navigate('/pokedex/'+(parseInt(id)+1))
  }
  const getPrevPokemon = () => {
    if(id >= 1) {
     navigate(`/pokedex/${id-1}`)
    }
    return;
  }

  useEffect(() => {
    getData(`${baseUrl}${id}`)
  },[id]) 

  // console.log(data)
  return (
    <>
    {
      data && 
      <div className='details__container'>
        <Header/>
        <div className="pokedex__container">

          <div className="pokedex-header">
            <div className="header-big-light">
              <div className="big-light-1"></div>
            </div>
            <div className="header-smallighr-container">
              <div className="smallight" style={{background: 'red'}}></div>
              <div className="smallight" style={{background: 'yellow'}}></div>
              <div className="smallight" style={{background: 'green'}}></div>
            </div>
          </div>

          <div className="pokedeex__body">

            <div className="pokedex-window__container">
              <div className="points-red uno"></div>
              <div className="points-red dos"></div>
              <div className="points-red tres"></div>
              <i class='bx bx-menu triple-line'></i>
              <div className="pokedex-window">
                <img 
                className='pokedex-window__img'
                src={showShiny ? 
                    data.sprites.other.showdown.front_shiny || data.sprites.front_default
                  : data.sprites.other.showdown.front_default || data.sprites.front_shiny} 
                alt="window" />
                <h4 style={{color: getColor(data.types[0].type.name).color}}> {data?.name}</h4>
              </div>
            </div>

            <div className="pokedex-window__container-meta">
              <div className="window-meta-col1">
                <p>Height : {data.height}</p>
                <p>Weight : {data.weight}</p>
                <p>Abilities :</p>
                {data.abilities.map((e, index) => <span key={Date.now()+index}>{e.ability.name}-</span> )}
                <p>type :</p>
                {data.types.map((e, index) => <span key={Date.now()+index}>{e.type.name}-</span> )}
              </div>
              <div className="window-meta-col2">
                <div className="progress__container">
                  <p className="progress-value">hp :{data.stats[0].base_stat}%</p>
                  <progress value={data.stats[0].base_stat} max={150}>150</progress>
                </div>
                <div className="progress__container">
                  <p className="progress-value">Attack :{data.stats[1].base_stat}%</p>
                  <progress value={data.stats[1].base_stat} max={150}></progress>
                </div>
                <div className="progress__container">
                  <p className="progress-value">Defense :{data.stats[2].base_stat}%</p>
                  <progress value={data.stats[2].base_stat} max={150}></progress>
                </div>
                <div className="progress__container">
                  <p className="progress-value">Speed :{data.stats[5].base_stat}%</p>
                  <progress value={data.stats[5].base_stat} max={150}></progress>
                </div>
              </div>
            </div>

            <div className="pokedex-controls">
              <div className="control-1">
                <audio ref={audioRef}>
                  <source src={data.cries.legacy} type='audio/mpeg'/>
                </audio>
                <button onClick={handleAudio} class="btn-class-name">
                  <span class="back"></span>
                  <span class="front"><i class='bx bxs-volume-full'></i></span>
                </button>
              </div>
              <div className="control-2">
                <div className="control-button__container">
                  <button className='btn-red'></button>
                  <button className='btn-blue'></button>
                </div>
                <div className="green-window">
                  <h1>#{data.id}</h1>
                </div>
              </div>
              <div className="control-3">
                <div class="botonera">
                  <button onClick={() => setShowShiny(!showShiny)} class="btn arriba"></button>
                  <button  class="btn abajo"></button>
                  <button onClick={getPrevPokemon} class="btn izquierda"></button>
                  <button onClick={getNextPokemon} class="btn derecha"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default CardDetails