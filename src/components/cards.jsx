import React, {memo} from 'react'
import Card from './card.jsx'

function Cards({data, pokemon}) {
  if (data) {
    return (<>
      {
        data.map((e, index) => <Card key={Date.now()+index} link={e.url}/>)
      }
    </>)
  } else {
    return (<>
        {
          pokemon && <Card key={Date.now()} pokemonObj={pokemon}/>
        }
      </>)
  }
}

export default memo(Cards)