import './App.css'
import Perfil from "./components/Perfis"



import fotoPietro from "./assets/fotoUsuarioPietroM.png"
import fotoPyetro from "./assets/fotoUsuarioPyetro.png"
import fotoVitor from "./assets/fotoUsuarioVitorG.png"

function App() {

  return (
    <>



      <Perfil foto={fotoPietro} nome="Pietro Melle Michelin" hobbies ="Os meus hobbies são: Praticar esportes"></Perfil>
      <Perfil foto={fotoPyetro} nome="Pyetro Joaquim Taborda Nunes" hobbies ="Os meus hobbies são: Jogar jogos onlines, ouvir música e cozinhar"></Perfil>
      <Perfil foto={fotoVitor} nome="Vitor Geraldo Cecato " hobbies ="Meus hobbies são: jogar jogos onlines, programar e nadar."></Perfil>
    </>
  )
}

export default App
