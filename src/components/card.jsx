import React, { useEffect } from 'react'
import useFetchApi from '../hooks/useFetchApi'
import { Link } from 'react-router'

function card({name, link}) {

    const {data, error, isPending, getData} = useFetchApi()

    useEffect(() => {
        getData(link)
    },[])

  return (
    <>
        <Link to={`${data?.id}`}>{data?.name}</Link><br />
    </>
  )
}

export default card