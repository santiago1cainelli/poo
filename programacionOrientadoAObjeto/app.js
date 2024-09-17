import { Gato } from "./clases/Gato.js";

const divGatos = document.querySelector(`#gatos`);

//creamos el objeto
const garfield = new Gato("Garfield", "garfield.png");
garfield.comida = "pescado";
const tom = new Gato("Tom", "tom.png");
tom.comida = "albóndigas con salsa";
const silvestre = new Gato("Silvetre","silvestre.png");
silvestre.comida = "asado";
const marie = new Gato("Marie","marie.png");
marie.comida = "sushi";

const gatos = [garfield,tom,silvestre,marie];

document.addEventListener(`DOMContentLoaded`, ()=>{
    gatos.map(gato =>{
        divGatos.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src ="./imagenes/${gato.imagen}" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">${gato.nombre}</h5>
                <p class="card-text">${gato.saludar()} y me gusta comer ${gato.comida} .</p>
                <p class="card-text">Te doy albóndigas.</p>
                <p class="card-text">${gato.comer(`albondigas`)}</p>
            </div>
        </div>
        `;
    })
})