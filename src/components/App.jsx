import Header from "./Header";
import getDataApi from "../services/api";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import SelectHouse from "./SelectHouse";


function App() {
  const [listCharacter, setListCharacter]=useState([]);
  const [selectHouse, setSelectHouse]=useState("all");
  const [filteredCharacter, setFilteredCharacter]=useState([]);
//Este useEffect carga los datos de la API cuando el componente se monta
  useEffect(()=>{
    getDataApi().then(cleanData =>{
      setListCharacter(cleanData);
  setFilteredCharacter(cleanData);

  }); 
},[]);
//Este useEffect filtra los personajes cuando cambia la casa seleccionada
useEffect(()=>{
  if(selectHouse === "all"){
    setFilteredCharacter(listCharacter)
  }else{
    //Filtramos los personajes por la casa seleccionada
    const filtered=listCharacter.filter((item)=>item.house===selectHouse);
    setFilteredCharacter(filtered);
  }
},[selectHouse, listCharacter]);


  const changeSelectHouse =(valueSelect)=>{
    setSelectHouse(valueSelect);
  }


  
  return (
    <>
    <Header/>
    <main>
      <SelectHouse changeSelectHouse={changeSelectHouse}/>
      <section>
        <CharacterList listCharacter= {filteredCharacter}  />
      
      </section>

    </main>
        
        </>  
  )
}

export default App;



