

function SelectHouse
({changeSelectHouse, changeSearchName, selectHouse}) {
//estado local para el input de busqueda de personaje

    const handleChangeHouse=(event)=>{
        changeSelectHouse(event.target.value);
    }
  const handleChangeName=(event)=>{
    changeSearchName(event.target.value);
  }

  return (
    <form>
        <label htmlFor="name">Buscar por personaje:</label>
        <input type="text" id="name" onChange={handleChangeName}/>
        <label htmlFor="select">Selecciona la casa:</label>
        <select name="select" value={selectHouse} onChange={handleChangeHouse}>
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