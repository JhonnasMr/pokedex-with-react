import { create } from 'zustand'

const  useStore = create((set) => ({
    userName : '',
    theme : 'light',
    data : [],
    search : {
        searchType : null,
        lastSearch : null,
        searchByID : null,
        searchByName : null
    },
    singlePokemon : null,
    setUserName : (nameInput) => set((state) => ({...state, userName : nameInput})),
    setTheme : () => set((state) => state.theme =='light'? {...state, theme:'dark'}:{...state, theme:'light'}),
    setData : (newData) => set((state) => ({...state, data: newData})),
    setSinglePokemon : (newData) => set({...state, singlePokemon : newData}),
    setSearch : (ste, value) => set((state) => ({...state, search : {...state.search, [`${ste}`]: value}})) 
}))

export default useStore