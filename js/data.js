const URL = "https://restcountries.com/v3.1/all"

const getData = async () =>{
    const data = fetch(URL)
    .then(response => response.json())
    .then(countries => countries);

    return data;
}

export default{
    getData
}