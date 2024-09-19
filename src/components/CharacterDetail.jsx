import { Link } from "react-router-dom"
import "../scss/CharacterDetail.scss"

function CharacterDetail({data}) {
  const imageOption=()=>{
    return data.image?data.image:`https://pm1.narvii.com/6474/c642ed91498b15b6205bcebbd48db45f7077104c_hq.jpg`
  }

  return (
    <article >
      <Link className="linkDetail"to="/"> Volver </Link>
      <div className="articleDetail">
      <figure>
      <img className="articleDetail__img"src={imageOption()} alt="Imagen Personaje" />
      </figure>
      <div>
        <h4 className="articleDetail__h4">{data.name}</h4>
        <p className="articleDetail__p">Especie:{data.species}</p>
        <p className="articleDetail__p">Casa:{data.house}</p>
        <p className="articleDetail__p">Género:{data.gender}</p>
        <p className="articleDetail__p">Estatus:{data.alive?"Vivo":"Muerto"}</p>
      </div>
      </div>
      
    
      
    </article>

  )
}

export default CharacterDetail