import React, {memo, useState} from 'react'
import Card from './card.jsx'
import Pagination from './pagination.jsx'


function Cards({data, pokemon}) {
  if (data) {
    return (
    <Pagination itemsPerPage={9}>
      {
        data.map((e, index) => <Card key={Date.now()+index} link={e.url}/>)
      }
    </Pagination>)
  } else {
    return (
      <div className='container__card'>
        {
          pokemon && <Card key={Date.now()} pokemonObj={pokemon}/>
        }
      </div>)
  }
}

export default memo(Cards)