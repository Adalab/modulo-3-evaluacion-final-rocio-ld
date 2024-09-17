import CharacterCard from "./CharacterCard"

function CharacterList({listCharacter}) {
  
    const mapCharacter =()=>{
        return(listCharacter.map(item=><CharacterCard key={item.id} item={item}/>))
    }
    return (
    <div>
        {mapCharacter()}
    </div>
  )
}

export default CharacterList