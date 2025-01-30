import React from 'react'
import Card from './card.jsx'

function Cards({data}) {
  console.log(data)
  return (
    <>
      {
        data.map((e, index) => {
          return <Card key={Date.now()+index} name={e.name} link={e.url}/>
        })
      }
    </>
  )
}

export default Cards