import { Link } from "react-router-dom"

function CharacterDetail({data}) {
  const imageOption=()=>{
    return data.image?data.image:`https://pm1.narvii.com/6474/c642ed91498b15b6205bcebbd48db45f7077104c_hq.jpg`
  }

  return (
    <article>
      
      <img src={imageOption()} alt="Imagen Personaje" />
        <h4>{data.name}</h4>
        <p>Especie:{data.species}</p>
      <p>Casa:{data.house}</p>
      <p>Género:{data.gender}</p>
      <p>Estatus:{data.alive?"Vivo":"Muerto"}</p>
      <Link to="/">Ir al Inicio</Link>
      
    </article>

  )
}

export default CharacterDetail