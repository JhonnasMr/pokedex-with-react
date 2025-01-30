import React, {useRef} from 'react'
import useStore from '../contexts/useStore'

function SearchBar() {

    const textValue = useRef()
    const selectType = useRef()
    const setSearch = useStore((s) => s.setSearch)

    const handleClick = () => {
        setSearch('searchType', selectType.current.value)
        setSearch('searchByName', textValue.current.value)
        setSearch('lastSearch', textValue.current.value)
        textValue.current.value = ''
    }

  return (
    <>
        <div className="search">
            <div className="search__input-container">
                <input 
                 ref={textValue}
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
            </div>
            <div className="select__input-container">
                <select id="select-type" ref={selectType}>
                    <option value="0">normal</option>
                    <option value="1">fighting</option>
                    <option value="2">flying</option>
                    <option value="3">poison</option>
                    <option value="4">ground</option>
                    <option value="5">rock</option>
                    <option value="6">bug</option>
                    <option value="7">ghost</option>
                    <option value="8">steel</option>
                    <option value="9">fire</option>
                    <option value="10">water</option>
                    <option value="11">grass</option>
                    <option value="12">electric</option>
                    <option value="13">psychic</option>
                    <option value="14">ice</option>
                    <option value="15">dragon</option>
                    <option value="16">dark</option>
                    <option value="17">fairy</option>
                    <option value="18">stellar</option>
                    <option value="19">unknown</option>
                </select>
            </div>
        </div>
    </>
  )
}

export default SearchBar