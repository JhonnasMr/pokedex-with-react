import './App.css'
import background_sound from '/PokemonIChooseYou_soundtrack.mp3'
import AppRoute from './Routes/AppRoute'

function App() {

  return (
    <>
      <audio src={background_sound} type='audio/mpeg' autoPlay loop></audio>
      <AppRoute/>
    </>
  )
}

export default App
