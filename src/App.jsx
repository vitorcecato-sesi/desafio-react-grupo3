import './App.css'
import Perfil from "./components/Perfis"
import fotoPerfilLauraB from "./assets/fotoUsuarioLauraB.png"
import fotoPerfilLucas from "./assets/fotoUsuarioLucas.png"
import fotoPerfilMilena from "./assets/fotoUsuarioMilena.png"

function App() {

  return (
    <>
      <Perfil foto={fotoPerfilLauraB} nome="Laura Betti Migliaccio" hobbies="Ouvir música e ver filmes/séries."/>

      <Perfil foto={fotoPerfilLucas} nome="Lucas Casagrande da Silva" hobbies="Praticar vôlei, jogar jogos online e assistir séries."/>

      <Perfil foto={fotoPerfilMilena} nome="Milena Oliveira Souza" hobbies="Escutar música, ver filmes e séries, estudar matemática e cozinhar."/>
    </>
  )
}

export default App
