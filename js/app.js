import arr from "./data.js";
import dom from "./dom.js"

const countries = await arr.getData();

const filter = countries[2].borders;

console.log(filter);

//  const cards = dom.creatCard(countries)


 const searchCountry = dom.callElement('#searchCountry');
 
 searchCountry.addEventListener('keyup', () =>{
 
     let filtro = searchCountry.value;
     console.log(filtro)
     const filtered = filtro === '' ? countries : arr.filterByName(countries, filtro);
     console.log(filtered)

     dom.showCards(filtered);

     const card =  [...dom.callElement('#countryCards').children];

card.forEach(elem => {
   elem.addEventListener('click', () => {
    let filtro = ''
        filtro = event.target.textContent;
    console.log(filtro)
    const filteredModal = filtro == '' ? countries : arr.showModal(filtered, filtro)

    dom.InsertarModal(filteredModal);
   })
})
     });

 //regions

 const regions = arr.getRegions(countries)

 dom.regionButtons(regions);

 const catRegions = [...dom.callElement('#button-Continents').children];


catRegions.forEach(elem =>{
    elem.addEventListener('click', () => {
        console.log(elem.textContent)
        const filtered = elem.textContent === '' ? countries : arr.countryRegions(countries,elem.textContent)
        dom.showCards(filtered);

        const card =  [...dom.callElement('#countryCards').children];

        card.forEach(elem => {
           elem.addEventListener('click', () => {
            let filtro = ''
                filtro = event.target.textContent;
            console.log(filtro)
            const filteredModal = filtro == '' ? countries : arr.showModal(filtered, filtro)
        
            dom.InsertarModal(filteredModal);
           })
        })
    })
})

//show cards

dom.showCards(countries)
   

//Modal

const card =  [...dom.callElement('#countryCards').children];

card.forEach(elem => {
   elem.addEventListener('click', () => {
    let filtro = ''
        filtro = event.target.textContent;
    console.log(filtro)
    const filtered = filtro == '' ? countries : arr.showModal(countries, filtro)

    dom.InsertarModal(filtered);
   })
})


// // forEach button
// countries.forEach(elem => {
//     dom.insertarButton(elem.borders)
// })

