const URL = "https://restcountries.com/v3.1/all"

const getData = async () =>{
    const data = fetch(URL)
    .then(response => response.json())
    .then(countries => countries);

    return data;
}

// Filtro teclado 
const filterByName = (arr, filtro) => {

    let filtered = arr.filter(elem => elem.name.common.toLowerCase().includes(filtro.toLowerCase()))
    return filtered
}


//array de los continentes

const getRegions = (data) =>{
    let newRegions = data.map(elem => elem.region)

    newRegions = new Set(newRegions)
    
    newRegions = [...newRegions]

    return newRegions
}

// filtro por region 

const countryRegions = (arr, filtro) =>{
    let newCountryRegions = arr.filter(elem => elem.region == filtro)
    newCountryRegions = [...newCountryRegions];

    return newCountryRegions
}

// Filtro del modal

const showModal = (arr, filtro) => {

    let newModal = arr.filter(elem => elem.name.common == filtro)
    newModal = [...newModal];

    return newModal
}

export default{
    getData,
    filterByName,
    getRegions,
    countryRegions,
    showModal
}