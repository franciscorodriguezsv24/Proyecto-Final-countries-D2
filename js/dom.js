
const creatElement = elem => document.createElement(elem);
const callElement = elem => document.querySelector(elem);

const father = callElement("#countriCards")
console.log(father);

const creatCard = (arr) => {
    arr.forEach(elem => {
        const father = callElement ("#countriCards")
        const div = creatElement('div');
        div.className = "col";
    
        div.innerHTML = `
        <div class="card px-0 h-100" data-bs-toggle="modal" data-bs-target="#country" style="padding-bottom:50px;">
        <img src="${elem.flags.png}" class="card-img-top img-fluid h-50"  alt="...">
         <div class="card-body d-flex flex-column gap-2 ps-5">
          <p class=" fw-bold m-0 py-3">${elem.name.common}</p>
          <p class="m-0 fw-normal" >Population: <spam class="fw-light">${elem.population}</spam></p>
          <p class="m-0  fw-normal">Region:<spam class="fw-light"> ${elem.region}</spam></p>
          <p class="m-0  fw-normal">Capital: <spam class="fw-light">${elem.capital}</spam></p>
       </div>
     </div>`
    
     father.appendChild(div);
    

    })
   
}

export default{
    creatCard,
    callElement
}