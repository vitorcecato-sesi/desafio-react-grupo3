import "./Perfis.css"

function perfil (props) {
    return (
        <>
        <section className="blocoPerfil">
        <img className="fotoPerfil" src={props.foto}></img>
        <section className="blocoTextos">
        <h3 className="nome">{props.nome}</h3>
        <p className="hobbies">{props.hobbies}</p>
        </section>
        </section>

        </>
    )

}

export default perfil