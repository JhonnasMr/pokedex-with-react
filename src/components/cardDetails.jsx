import React from 'react'
import { useParams } from 'react-router'

function CardDetails() {
  const {id} = useParams()
  return (
    <div>ID del pokemon es : {id}</div>
  )
}

export default CardDetails