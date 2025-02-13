import './Footer.css'

function Footer(props) {

    return (
      <>
      <footer className="footer">

        <section className="informacoes-contatos">
            <h3>{props.email}</h3>
            <h3>{props.instagram}</h3>
        </section>

        <section className="informacao-resposavel" >
            <p>{props.texto}</p>
        </section>

      </footer>
        
      </>
    )
  }
  
  export default Footer