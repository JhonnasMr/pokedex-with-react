import React, { useEffect, useRef, memo } from 'react'
import useFetchApi from '../hooks/useFetchApi'
import { Link } from 'react-router'

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
        {isPending && <h1>Loading...</h1>}
        {
          data ? 
          <div className='card'>
            <div className="card__container">
              <div className="card-img">
                <audio ref={audioRef}>
                  <source src={data.cries.legacy} type='audio/mpeg'/>
                </audio>
                <img onClick={(e) => handleAudio(e)} src={data.sprites.front_default} alt={`pokemon ${data.name}`} />
              </div>
              <div className="card-body">
                <h3>{data.name}</h3>
                {data.types.map((e, index) => <p key={Date.now()+index}>{e.type.name}</p> )}
                <p>Type</p>
                <div className="card-body-stats container__grid-center">
                  <div className="stats">
                    <p>HP</p>
                    <h4>{data.stats[0].base_stat}</h4>
                  </div>
                  <div className="stats">
                    <p>ATTACK</p>
                    <h4>{data.stats[1].base_stat}</h4>
                  </div>
                  <div className="stats">
                    <p>DEFENCE</p>
                    <h4>{data.stats[2].base_stat}</h4>
                  </div>
                  <div className="stats">
                    <p>SPEED</p>
                    <h4>{data.stats[5].base_stat}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : <h2>Pokemon not found</h2>
        }
          <Link to={`${data?.id}`}>{data?.name}</Link><br />
      </>
    )
  }else if ( pokemonObj ){

    let {name, cries, sprites, types, stats, id} = pokemonObj

    return (
      <>
      {
        <div className='card'>
          <div className="card__container">
            <div onClick={(e) => handleAudio(e)} className="card-img">
              <audio ref={audioRef}>
                <source src={cries.legacy} type='audio/mpeg'/>
              </audio>
              <img src={sprites.front_default} alt={`pokemon ${name}`} />
            </div>
            <div className="card-body">
              <h3>{name}</h3>
              {types.map((e, index) => <p key={Date.now()+index}>{e.type.name}</p> )}
              <p>Type</p>
              <div className="card-body-stats container__grid-center">
                <div className="stats">
                  <p>HP</p>
                  <h4>{stats[0].base_stat}</h4>
                </div>
                <div className="stats">
                  <p>ATTACK</p>
                  <h4>{stats[1].base_stat}</h4>
                </div>
                <div className="stats">
                  <p>DEFENCE</p>
                  <h4>{stats[2].base_stat}</h4>
                </div>
                <div className="stats">
                  <p>SPEED</p>
                  <h4>{stats[5].base_stat}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
        <Link to={`${id}`}>{name}</Link><br />
    </>
    )
  }
}

export default memo(card)