import Header from "./Header";
import getDataApi from "../services/api";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import SelectHouse from "./SelectHouse";


function App() {
  const [listCharacter, setListCharacter]=useState([]);
  const [selectHouse, setSelectHouse]=useState("Gryffindor");
  const [filteredCharacter, setFilteredCharacter]=useState([]);
  const [searchName, setSearchName]=useState("");

//Este useEffect carga los datos de la API cuando el componente se monta
  useEffect(()=>{
    getDataApi().then(cleanData =>{
      setListCharacter(cleanData);
  setFilteredCharacter(cleanData);

  }); 
},[]);
//Este useEffect filtra los personajes cuando cambia la casa seleccionada
useEffect(()=>{
  const filteredByHouse =
  selectHouse === "all"
    ? listCharacter
    : listCharacter.filter((item) => item.house === selectHouse);

  const filterByName= filteredByHouse.filter((item)=>item.name.toLowerCase().includes(searchName.toLowerCase()))
    setFilteredCharacter(filterByName);
  }
,[selectHouse, searchName, listCharacter]);

//funcion para hallar el valor del select para pasárselo al componente de SelectHouse.jsx
  const changeSelectHouse =(valueSelect)=>{
    setSelectHouse(valueSelect);
  }
  //funcion para actualizar busqueda nombre

  const changeSearchName=(valueName)=>{
    setSearchName(valueName);
  }


  
  return (
    <>
    <Header/>
    <main>
      <SelectHouse changeSelectHouse={changeSelectHouse} changeSearchName={changeSearchName} selectHouse={selectHouse} />
      <section>
        <CharacterList listCharacter= {filteredCharacter}  />
      
      </section>

    </main>
        
        </>  
  )
}

export default App;



