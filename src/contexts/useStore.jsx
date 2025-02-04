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
    audio_background : true,
    setUserName : (nameInput) => set((state) => ({...state, userName : nameInput})),
    setTheme : () => set((state) => state.theme =='light'? {...state, theme:'dark'}:{...state, theme:'light'}),
    setData : (newData) => set((state) => ({...state, data: newData})),
    setAudio_background : () => set((state) => ({...state, audio_background : !state.audio_background})),
    setSearch : (ste, value) => set((state) => ({...state, search : {...state.search, [`${ste}`]: value}})),
}))

export default useStore