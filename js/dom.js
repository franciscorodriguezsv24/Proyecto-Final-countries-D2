
const creatElement = elem => document.createElement(elem);

const callElement = elem => document.querySelector(elem);
//espacio para crear las cards
const card = callElement('#countryCards');
// Espacio para la lista
const ul = callElement('#button-Continents')
// Espacio para darkMode
const darkMode = callElement('#Dark');
// Espacio para el LightMode
const lightMode = callElement('#Light');
//Espacio del HTMl
const html = callElement('html');
//Espacio para el modal 
const modalMaker = callElement('#modalMaker')
//div para los buttons 
const button = callElement('.modal');
console.log(button)

//Dark mode
darkMode.addEventListener('click', () =>{
  
   
    html.dataset.bsTheme = html.dataset.bsTheme == "light" ? "dark":"light"
   
})
//Dark mode del modal 
lightMode.addEventListener('click', () =>{
  
   
    html.dataset.bsTheme = html.dataset.bsTheme == "dark" ? "light":"dark"
   
})
//Creacion de cards
const creatCard = (obj) => {

    const div = creatElement('div');
    div.className = "col identificador";

    div.innerHTML = `
    <div class="card px-0 h-100" data-bs-toggle="modal" data-bs-target="#country" style="padding-bottom:50px; id="perCountry">
    <img src="${obj.flags.png}" class="card-img-top img-fluid h-50"  alt="...">
     <div class="card-body d-flex flex-column gap-2 ps-5">
      <p class=" fw-bold m-0 py-3 user-select-none"id="countryNames">${obj.name.common}</p>
      <p class="m-0 fw-normal" >Population: <spam class="fw-light">${obj.population}</spam></p>
      <p class="m-0  fw-normal">Region:<spam class="fw-light"> ${obj.region}</spam></p>
      <p class="m-0  fw-normal">Capital: <spam class="fw-light">${obj.capital}</spam></p>
   </div>
 </div>`

 return div;

}
//Regiones
const createRegions = (arr) =>{
    const li = creatElement('li')
    li.innerHTML = `<button class="dropdown-item" type="button">${arr}</button>`
    return li;
}

const regionButtons = (arr) => {
    arr.forEach(elem => {
   
        const li = createRegions(elem);
    
        ul.appendChild(li);
    })
}
//Mostrar filtros 
const showCards = (arr) =>{
    card.innerHTML = '';
    arr.forEach(elem => {
        const cards = creatCard(elem);
        card.appendChild(cards)
    })


}

//Creacion del modal 

const ModalCountry = (arr) =>{
    const div = creatElement('div');
    div.className = "container";
    div.id = "final"
    div.innerHTML = ` <div class="container">
    <div class="row g-4">
      <div class="col-12 button">
        <div class="col-12 d-flex flex-row align-self-center">
          <button class="btn btn-light-subtle  d-flex gap-2" type="button" data-bs-dismiss="modal" aria-label="Close"><span class="material-symbols-outlined justify-content-center">
    keyboard_backspace
            </span>Back</button>
        </div>
      </div>
      <div class="col-lg-6 col-12 image">
          <img src="${arr.flags.svg}" class="img-fluid">
      </div>
      <div class="col-lg-6 col-12 data " >
        <div class="row g-4">
          <div class="col-12">
            <p class="fw-bold">${arr.name.common}</p>
          </div>
          <div class="col-lg-6 col-12">
            <div class="d-flex flex-column gap-2">
              <p class="m-0  fw-normal">Native Name: <spam class="fw-light">${arr.name.official}</spam></p>
              <p class="m-0  fw-normal">Population: <spam class="fw-light">${arr.population}</spam></p>
              <p class="m-0  fw-normal">Region: <spam class="fw-light">${arr.region}</spam></p>
              <p class="m-0  fw-normal">Sub Region: <spam class="fw-light">${arr.subregion}</spam></p>
              <p class="m-0  fw-normal">Capital: <spam class="fw-light">${arr.capital}</spam></p>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="d-flex flex-column gap-2">
              <p class="m-0  fw-normal">Top Level Domain: <spam class="fw-light">${arr.tld}</spam></p>
              <p class="m-0  fw-normal">Currencies: <spam class="fw-light">${Object.keys(arr.currencies)}</spam></p>
              <p class="m-0  fw-normal">Languages: <spam class="fw-light">${Object.keys(arr.languages)}</spam></p>
             </div>
           </div>
           <div class="col-12">
            <div class="row">
              <div class="col-lg-4 col-12 d-flex">
                <p class="fs-6 m-0 align-self-center">Border Countries:</p>
              </div>
              <div class="col-lg-8 col-12" id="finalButtons>
                <div class="d-flex gap-2">
                  <button class="btn btn-light-subtle">Back</button>
                  <button class="btn btn-light-subtle">Back</button>
                  <button class="btn btn-light-subtle">Back</button>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>`

    return div
}

const InsertarModal = (arr) => {
modalMaker.innerHTML = '';
arr.forEach(elem => {
    const modals = ModalCountry(elem);
    modalMaker.appendChild(modals);

})
}

// crear buttons

// const finalButtons = (arr) =>{
//     const button = creatElement('div');
//     button.className = "d-flex gap-2"

//     button.innerHTML = `<button class="btn btn-light-subtle">${arr}</button>`
    
//     return button;
// }

// const insertarButton = (arr) => {
//     buttons.innerHTML = ''
//        arr.forEach(elem => {
//        const button = finalButtons(elem);
//        buttons.appendChild(button);
//     })
// }

export default{
    creatCard,
    callElement,
    regionButtons,
    showCards,
    InsertarModal,
    // finalButtons,
    // insertarButton
}