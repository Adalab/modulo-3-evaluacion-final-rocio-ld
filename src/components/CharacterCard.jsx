
function CharacterCard({item}) {
    
  return (
    <article>
        <img src={item.image?item.image:`https://pm1.narvii.com/6474/c642ed91498b15b6205bcebbd48db45f7077104c_hq.jpg`} alt="Imagen Personaje" />
        <h4>{item.name}</h4>
        <p>{item.species}</p>
    </article>
  )
}

export default CharacterCard