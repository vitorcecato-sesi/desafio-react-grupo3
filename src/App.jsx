import './App.css'
import Footer from "./components/Footer"
import foto from "./assets/gmail.png"
import foto2 from "./assets/instagram.png"
import logo from "./assets/logoG3.png"

function App() {

  return (
    <>
      
      <Footer imagem1={foto} email="vitor.cecatosesi@gmail.com" imagem2={foto2} instagram="@vitorgcecato" texto="O Vitor Geraldo Cecato é o responsável pelo projeto PROPS, cuidando da coordenação e garantindo que o conteúdo seja de qualidade e esteja sempre no caminho certo."  imglogo={logo}/>
    </>
  )
}

export default App
