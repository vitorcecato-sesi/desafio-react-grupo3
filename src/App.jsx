/* 🎈 Aqui estamos importando o arquivo de estilo (CSS) */
import "./App.css";

// Componentes:
  /* 🎈 Aqui estamos importando o componente "Perfil", que vai trazar a function(props) para colocar as informações aqui */
  import Perfil from "./components/Perfis";
  import Header from "./components/Header";
  import Valores from "./components/aside";
  import Footer from "./components/Footer";
//.

/* 🎈 Aqui estamos importando as imagens que serão usadas nos perfis */
import fotoPerfilLauraB from "./assets/fotoUsuarioLauraB.png";
import fotoPerfilLucas from "./assets/fotoUsuarioLucas.png";
import fotoPerfilMilena from "./assets/fotoUsuarioMilena.png";
import fotoPietro from "./assets/fotoUsuarioPietroM.png";
import fotoPyetro from "./assets/fotoUsuarioPyetro.png";
import fotoVitor from "./assets/fotoUsuarioVitorG.png";

// Fotos Footer
import foto from "./assets/gmail.png"
import foto2 from "./assets/instagram.png"
import logo from "./assets/logoG3.png"

/* 🎈 Aqui estamos criando a função "App", para colocar as informações dos PROPS e ser excutado quando o App for iniciado */
function App() {

  /* 🎈 Aqui estamos retornando o conteúdo do nosso aplicativo, o que vai exibir */
  return (
    <>
      <Header/>
      <section className="meioPagina">
        <main className="elementosCartas">
          <section className="blocoCartas">
            {/* 🎈 Aqui estamos chamando o componente "Perfil" e passando as informações de cada pessoa */}
            <Perfil
              // Aqui estamos passando a foto como propriedade para o componente "Perfil"
              foto={fotoPerfilLauraB}
              // Aqui estamos passando o nome como propriedade para o componente "Perfil"
              nome="Laura Betti Migliaccio"
              // Aqui estamos passando os hobbies como propriedade para o componente "Perfil"
              hobbies="Os meus hobbies são: Ouvir música e ver filmes/séries."
            />

            <Perfil 
              foto={fotoPerfilLucas} 
              nome="Lucas Casagrande da Silva" 
              hobbies="Os meus hobbies são: Praticar vôlei, jogar jogos online e assistir séries." 
            />

            <Perfil 
              foto={fotoPerfilMilena} 
              nome="Milena Oliveira Souza" 
              hobbies="Os meus hobbies são: Escutar música, ver filmes e séries, estudar matemática e cozinhar." 
            />
          </section>

          <section className="blocoCartas">
            <Perfil 
              foto={fotoPietro} 
              nome="Pietro Melle Michelin" 
              hobbies="Os meus hobbies são: Praticar esportes" 
            />

            <Perfil 
              foto={fotoPyetro} 
              nome="Pyetro Joaquim Taborda Nunes" 
              hobbies="Os meus hobbies são: Jogar jogos online, ouvir música e cozinhar" 
            />

            <Perfil 
              foto={fotoVitor} 
              nome="Vitor Geraldo Cecato" 
              hobbies="Meus hobbies são: jogar jogos online, programar e nadar." 
            />
          </section>
        </main>
        <Valores  valor1="União" valor2="Honestidade" valor3="Comprometimento"/>
      </section>
      <Footer 
        imagem1={foto} 
        imagem2={foto2} 
        email="vitor.cecatosesi@gmail.com" 
        instagram="@vitorgcecato"
        texto="O Vitor Geraldo Cecato é o responsável pelo projeto PROPS, cuidando da coordenação e garantindo que o conteúdo seja de qualidade e esteja sempre no caminho certo." 
        imglogo={logo}
      />
    </>
  )
}

/* 🎈 Aqui estamos exportando a função "App" para que ela possa ser usada em outros arquivos e o que vai iniciar o App */
export default App;
