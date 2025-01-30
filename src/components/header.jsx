import React from 'react'
import '../assets/header.css'

function Header() {
  return (
    <header className='header'>
        <div className="header__red">
            <img src="/imgs/pokedex-logo.png" alt="pokedex logo" />
            <div className="header__ball">
                <div className="ball-black"></div>
            </div>
        </div>
    </header>
  )
}

export default Header