import CharacterCard from "./CharacterCard"
import "../scss/CharacterList.scss"

function CharacterList({listCharacter}) {
  
    const mapCharacter =()=>{
        return(listCharacter.map(item=><CharacterCard key={item.id} item={item}/>))
    }
    return (
    <div className="divsection2">
        {mapCharacter()}
    </div>
  )
}

export default CharacterList