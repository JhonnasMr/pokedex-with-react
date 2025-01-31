import React, {useEffect, useRef} from 'react'
import { useNavigate } from 'react-router'
import useStore from '../contexts/useStore'

import '../assets/login.css'
import logo from '/logo_pokemon.svg'
import background_sound from '/PokemonIChooseYou_soundtrack.mp3'

function Login() {

  const setUserName = useStore((s) => s.setUserName)
  const inputRef = useRef()
  const navigate = useNavigate()

  const handleClickk = () => {
    setUserName(inputRef.current.value)
    navigate('/pokedex')
  }

  return (
    <>
    <div className="img-background ">
      <audio src={background_sound} type='audio/mpeg' autoPlay loop></audio>
      <img className='kenburns-bottom' src='/public/imgs/background.jpg' alt="background" />
    </div>
    <div className='gras-background'>
      <div className="land"></div>
      <div className="gras"></div>
    </div>
    <div className="login__containre">
      <div className="logo">
        <img src={logo} alt="logo de pokemon" />
      </div>
      <div className="login__card">
        <div className="card-text">
          <h1>Hola entrenador!</h1>
          <p>Bienvenido a la Pokdex Web</p>
          <p>Por favor escribe tu nombre.</p>
          <button className='button-transparent b-left'>.</button>
          <button className='button-transparent b-right'>.</button>
        </div>
      </div>
      <div className='form_username'>
        <input 
          ref={inputRef}
          placeholder="Type your name"
          maxLength={15}
          class="input" 
          name="text" 
          type="text"/>
        <button type='button' onClick={handleClickk}>
          <i class='bx bx-right-arrow-alt wobble-ver-left'></i>
        </button>
      </div>
      <div className="pokemon__container">
        <img src="/imgs/bulbasaur.png" alt="bulbasaur" className="pokemon-item bulbasaur" />
        <img src="/imgs/charmeleon.png" alt="charmeleon" className="pokemon-item charmeleon" />
        <img src="/imgs/esquarouwpng.png" alt="esqueerow" className="pokemon-item esqueerow" />
        {/* <img src="/imgs/hash_quepchu.png" alt="ash quepchup" className="pokemon-item ash-quepchup" /> */}
        <img src="/imgs/meow.png" alt="meow" className="pokemon-item meow" />
        <img src="/imgs/picachu.png" alt="picachu" className="pokemon-item picachu wobble-hor-top" />
      </div>
    </div>
    </>
  )
}

export default Login