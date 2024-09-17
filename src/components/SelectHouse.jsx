
function SelectHouse() {

    const handleChangeHouse=()=>{
        
    }
  return (
    <form>
        <label htmlFor="select">Selecciona la casa:</label>
        <select name="select" id="select" onChange={handleChangeHouse}>
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