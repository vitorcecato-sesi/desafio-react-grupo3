import './App.css'
import Perfil from "./components/Perfis"
import fotoPerfilLauraB from "./assets/fotoUsuarioLauraB.png"
import fotoPerfilLucas from "./assets/fotoUsuarioLucas.png"
import fotoPerfilMilena from "./assets/fotoUsuarioMilena.png"



import fotoPietro from "./assets/fotoUsuarioPietroM.png"
import fotoPyetro from "./assets/fotoUsuarioPyetro.png"
import fotoVitor from "./assets/fotoUsuarioVitorG.png"

function App() {

  return (
    <>
      <Perfil foto={fotoPerfilLauraB} nome="Laura Betti Migliaccio" hobbies="Ouvir música e ver filmes/séries."/>

      <Perfil foto={fotoPerfilLucas} nome="Lucas Casagrande da Silva" hobbies="Praticar vôlei, jogar jogos online e assistir séries."/>

      <Perfil foto={fotoPerfilMilena} nome="Milena Oliveira Souza" hobbies="Escutar música, ver filmes e séries, estudar matemática e cozinhar."/>



      <Perfil foto={fotoPietro} nome="Pietro Melle Michelin" hobbies ="Os meus hobbies são: Praticar esportes"></Perfil>
      <Perfil foto={fotoPyetro} nome="Pyetro Joaquim Taborda Nunes" hobbies ="Os meus hobbies são: Jogar jogos onlines, ouvir música e cozinhar"></Perfil>
      <Perfil foto={fotoVitor} nome="Vitor Geraldo Cecato " hobbies ="Meus hobbies são: jogar jogos onlines, programar e nadar."></Perfil>
    </>
  )
}

export default App
