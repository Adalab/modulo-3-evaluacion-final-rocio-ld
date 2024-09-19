import { Link } from "react-router-dom"
import '../scss/CharacterCard.scss'

function CharacterCard({item}) {
    const imgOption=()=>{
      return item.image?item.image:`https://pm1.narvii.com/6474/c642ed91498b15b6205bcebbd48db45f7077104c_hq.jpg`
    }
  return (
    <article className="articleCard">
      <Link className="linkCard"to={`details/${item.id}`}>
        <img className="articleCard__img "src={imgOption()} alt="Imagen Personaje" />
        <h4 className="articleCard__h4">{item.name}</h4>
        <p className="articleCard__p">{item.species}</p>
        </Link>
    </article>
  )
}

export default CharacterCard