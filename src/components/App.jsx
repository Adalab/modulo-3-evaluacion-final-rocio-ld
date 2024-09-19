import Header from "./Header";
import getDataApi from "../services/api";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import SelectHouse from "./SelectHouse";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import "../scss/App.scss";



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

  //encontrar el objeto que me interesa de la url
  const { pathname }= useLocation()

 //me busca la parte dinamica y valido que la url sea la misma que la id
  const validationRoute= matchPath("/details/:id", pathname)
  

  const idCharacter= validationRoute ? (validationRoute.params.id ): null;
  
  const detail= listCharacter.find(item => item.id ===idCharacter)
  


  
  return (
    <>
    <Header/>
    <main>
    <section className="section1">
      
      <SelectHouse changeSelectHouse={changeSelectHouse} changeSearchName={changeSearchName} selectHouse={selectHouse} searchName={searchName} />
      
      </section>
      <section>
      <Routes>
        <Route 
        path="/" 
        element={<CharacterList listCharacter= {filteredCharacter}  />}
        />
        <Route path="/details/:id"element={<CharacterDetail data={detail}/>}/>
        </Routes>
      
        </section>
      

    </main>
        
        </>  
  )
};

export default App;



