import React, { useEffect, useRef } from 'react'
import useStore from '../contexts/useStore'
import useFetchApi from '../hooks/useFetchApi'

function SearchBar() {

    const textValue = useRef()
    const selectType = useRef()
    const setSearch = useStore((s) => s.setSearch)
    const dataSearch = useStore((s) => s.search)
    const setGlobal = useStore((s) => s.setData)
    
    const {data, isPending, error, getData} = useFetchApi()

    const handleClick = () => {
        if(!textValue.current.value) {
            selectType.current.value = 'all'
            setSearch('searchByName', null)
            getData(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
            return;
        }
        if (textValue.current.value){
            setSearch('searchByName', null)
            getData(`https://pokeapi.co/api/v2/pokemon/${textValue.current.value}`)
            return;
        }
    }

    const filterType = () => {
        setSearch('searchByName', null)
        getData(`https://pokeapi.co/api/v2/type/${selectType.current.value}`)
    }

    const filterName = () => {
        if(selectType.current.value !== 'all'){
            setSearch('searchByName', null)
            const input = textValue.current.value
            const filterResults = data?.pokemon?.filter(pokemon => pokemon.pokemon.name.includes(input))
            const filterLinks = []
            filterResults.map(e => filterLinks.push(e.pokemon))
            console.log(filterLinks)
            setGlobal(filterLinks)
        }
        return;
    }
    
    useEffect(() => {
        data?.pokemon && setGlobal(data.pokemon.map(e => e.pokemon))
        data?.results && setGlobal(data)
        data?.forms && setSearch('searchByName', data)
    },[data])

  return (
    <>
        <div className="search">
            <div className="search__input-container">
                <input 
                 ref={textValue}
                 onChange={filterName}
                 type="text" 
                 name="name pokemon" 
                 id="input-text" 
                 placeholder='Search'/>

                <button 
                 onClick={handleClick}
                 type='button' 
                 className='search-button'>
                    <i class='bx bx-search-alt'></i>
                </button>
                {error && 'No se encontro ' + textValue.current.value}
            </div>
            <div className="select__input-container">
                <select onChange={filterType} id="select-type" ref={selectType}>
                    <option value="all">All</option>
                    <option value="1">normal</option>
                    <option value="2">fighting</option>
                    <option value="3">flying</option>
                    <option value="4">poison</option>
                    <option value="5">ground</option>
                    <option value="6">rock</option>
                    <option value="7">bug</option>
                    <option value="8">ghost</option>
                    <option value="9">steel</option>
                    <option value="10">fire</option>
                    <option value="11">water</option>
                    <option value="12">grass</option>
                    <option value="13">electric</option>
                    <option value="14">psychic</option>
                    <option value="15">ice</option>
                    <option value="16">dragon</option>
                    <option value="17">dark</option>
                    <option value="18">fairy</option>
                    <option value="19">stellar</option>
                    <option value="20">unknown</option>
                </select>
            </div>
        </div>
    </>
  )
}

export default SearchBar