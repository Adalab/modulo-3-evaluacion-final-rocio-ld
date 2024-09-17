import Header from "./Header";
import getDataApi from "../services/api";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import SelectHouse from "./SelectHouse";


function App() {
  const [listCharacter, setListCharacter]=useState([]);
  const [selectHouse, setSelectHouse]=useState("all")

  useEffect(()=>{
    getDataApi().then(cleanData =>setListCharacter(cleanData))
  }, [])

/*const searchFilter=(itemHouse)=>{
  const filteredCharacter=listCharacter.filter(item=> item.house)
}*/

  
  return (
    <>
    <Header/>
    <main>
      <SelectHouse/>
      <section>
        <CharacterList listCharacter= {listCharacter}  />
      
      </section>

    </main>
        
        </>  
  )
}

export default App;



