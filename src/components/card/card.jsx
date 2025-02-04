import React, { useEffect, useRef, memo } from 'react'
import useFetchApi from '../../hooks/useFetchApi'
import { getColor } from '../../tools'
import { Link } from 'react-router'
import CardTemplate from './cardTemplate'
import './card.css'

function card({pokemonObj, link}) {
  
  const audioRef = useRef()
  
  const handleAudio = (e) => {
    e.target.classList.add('movin')
    audioRef.current.play()
    setTimeout(() => {
      e.target.classList.remove('movin')
    }, 800)

    return clearTimeout()
  }

  if( link ) {

    const {data, error, isPending, getData} = useFetchApi()
    
    useEffect(() => {
        getData(link)
    },[link])

    return (
      <>
        {isPending && <CardTemplate/>}
        {
          data ? 
          <div className='card' style={getColor(data.types[0].type.name)}>
            <Link style={{color: getColor(data.types[0].type.name).color}} to={`${data?.id}`}>
              <div className="card__container">
                <div className="card-img" style={getColor(data.types[0].type.name)}>
                  <audio ref={audioRef}>
                    <source src={data.cries.legacy} type='audio/mpeg'/>
                  </audio>
                  <img 
                    onClick={(e) => handleAudio(e)} 
                    src={data.sprites.other.showdown.front_default||data.sprites.front_default} 
                    alt={`pokemon ${data.name}`}/>
                </div>
                  <div className="card-body" >
                    <h3>{data?.name}</h3>
                    {data.types.map((e, index) => <span key={Date.now()+index}>{e.type.name}</span> )}
                    <p className='text-min'>Type</p>
                    <div className="card-body-stats">
                      <div className="stats">
                        <p className='text-min'>HP</p>
                        <h4>{data.stats[0].base_stat}</h4>
                      </div>
                      <div className="stats">
                        <p className='text-min'>ATTACK</p>
                        <h4>{data.stats[1].base_stat}</h4>
                      </div>
                      <div className="stats">
                        <p className='text-min'>DEFENCE</p>
                        <h4>{data.stats[2].base_stat}</h4>
                      </div>
                      <div className="stats">
                        <p className='text-min'>SPEED</p>
                        <h4>{data.stats[5].base_stat}</h4>
                      </div>
                    </div>
                  </div>
              </div>
            </Link>
          </div>
          : <CardTemplate/>
        }
      </>
    )
  }else if ( pokemonObj ){

    let {name, cries, sprites, types, stats, id} = pokemonObj

    return (
      <>
      {
        <div className='card' style={getColor(types[0].type.name)}>
           <Link style={{color: getColor(types[0].type.name).color}} to={`${id}`}>
            <div className="card__container">
              <div className="card-img">
                <audio ref={audioRef}>
                  <source src={cries.legacy} type='audio/mpeg'/>
                </audio>
                <img 
                  onClick={(e) => handleAudio(e)}
                  src={sprites.other.showdown.front_default||sprites.front_default}  
                  alt={`pokemon ${name}`}/>
              </div>
              <div className="card-body">
                <h3>
                  <Link 
                  to={`${id}`} 
                  style={{color: getColor(types[0].type.name).color}}>
                    {name}
                  </Link>
                </h3>
                {types.map((e, index) => <p key={Date.now()+index}>{e.type.name}</p> )}
                <p className='text-min'>Type</p>
                <div className="card-body-stats container__grid-center">
                  <div className="stats">
                    <p className='text-min'>HP</p>
                    <h4>{stats[0].base_stat}</h4>
                  </div>
                  <div className="stats">
                    <p className='text-min'>ATTACK</p>
                    <h4>{stats[1].base_stat}</h4>
                  </div>
                  <div className="stats">
                    <p className='text-min'>DEFENCE</p>
                    <h4>{stats[2].base_stat}</h4>
                  </div>
                  <div className="stats">
                    <p className='text-min'>SPEED</p>
                    <h4>{stats[5].base_stat}</h4>
                  </div>
                </div>
              </div>
            </div>
           </Link>
        </div>
      }
    </>
    )
  }
}

export default memo(card)