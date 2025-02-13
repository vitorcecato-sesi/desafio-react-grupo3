function Meio(props) {
  return (
    <div className="cartoes">
      <img src={props.fotoUsuario} alt="Foto de Perfil" />
      <h1>{props.nome}</h1>
      <p>{props.hobby}</p>
    </div>
  );
}

export default Meio;