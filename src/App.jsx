import './App.css'
import Perfil from "./components/Perfis"
import Teste from "./assets/logoG3.png"

function App() {

  return (
    <>
      <Perfil foto={Teste} nome="Nome Teste" hobbies="Esses são meus hobbies"/>
    </>
  )
}

export default App
