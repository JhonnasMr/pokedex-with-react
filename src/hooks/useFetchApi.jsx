import React, {useState} from 'react'
import axios from "axios";
import useStore from '../contexts/useStore';


function useFetchApi() {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    // const {search, data, singlePokemon, setData, setSinglePokemon} = useStore((e) => {
    //     return {
    //         search : e.search,
    //         data : e.data,
    //         singlePokemon : e.singlePokemon,
    //         setData : e.setData,
    //         setSinglePokemon : e.setSinglePokemon
    //     }
    // })
  
     const getData = async (url) => {
        setIsPending(true)
        try {
            const res = await axios(url)
            setData(res.data)
            setIsPending(false)
        } catch (error) {
            setIsPending(false)
            setError( new Error(error))
            console.log('Error en la Peticion a la Api')
        }
    }

    return {data, error, isPending, getData}

}

export default useFetchApi