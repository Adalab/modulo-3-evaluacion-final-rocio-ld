const getDataApi =()=>{
return fetch(`https://hp-api.onrender.com/api/characters/`)
.then(resp=>resp.json())
.then(data=>{
    const cleanData= data.map((item)=>{
        return{
            id: item.id,
            name: item.name,
            image: item.image,
            species: item.species,
            house: item.house,
            gender: item.gender,
            alive: item.alive

        }
    });
    return cleanData;
})
}
export default getDataApi;