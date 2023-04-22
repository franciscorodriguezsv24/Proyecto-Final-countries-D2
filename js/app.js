import arr from "./data.js";
import dom from "./dom.js"

const countries = await arr.getData();

//Buscador de rutas.
const finding = countries[0].flags;

console.log(finding)


dom.creatCard(countries);