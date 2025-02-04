import React from 'react'
import './header.css'

import useTheme from '../../hooks/useTheme'
import { Link } from 'react-router'

function Header() {

  const {theme, toggleTheme} = useTheme()

  return (
    <>
      <header className='header'>
        <div className="header__red">
          <Link to='/pokedex'>
            <img src="/imgs/pokedex-logo.png" alt="pokedex logo" />
          </Link>
        </div>
        <div onClick={(toggleTheme)} className="header__ball">
          <div className="ball-black">
          <i class={`bx bx-${theme=='light'?'moon':'sun'}`}></i>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header