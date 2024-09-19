import "../scss/SelectHouse.scss"

function SelectHouse
({changeSelectHouse, changeSearchName, selectHouse, searchName}) {
//estado local para el input de busqueda de personaje

    const handleChangeHouse=(event)=>{
        changeSelectHouse(event.target.value);
    }
  const handleChangeName=(event)=>{
    changeSearchName(event.target.value);
  }
  const handleKeyEnter=(event)=>{
    if(event.key === "enter"){
      event.preventDefault();
    }
  }

  return (
    <form className="form">
        <label htmlFor="name" className="form__label">Buscar por personaje:</label>
        <input type="text" className="form__input"id="name" value={searchName} onChange={handleChangeName} onKeyDown={handleKeyEnter}/>
        <label  htmlFor="select" className="form__label" >Selecciona la casa:</label>
        <select name="select" className="form__select" value={selectHouse} onChange={handleChangeHouse}>
            <option value="all">Todos</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
        </select>
    </form>
  )
}

export default SelectHouse