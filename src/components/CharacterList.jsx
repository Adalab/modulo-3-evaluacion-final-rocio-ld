import CharacterCard from "./CharacterCard"
import "../scss/CharacterList.scss"

function CharacterList({listCharacter}) {
  
    const mapCharacter =()=>{
        return(listCharacter.map(item=><CharacterCard key={item.id} item={item}/>))
    }
    return (
    <div className="divsection2">
        {listCharacter.length > 0 ? (
                mapCharacter()
            ) : (
                <p>No hay ningún personaje que coincida con la palabra </p>
            )}
    </div>
  )
}

export default CharacterList