// Tipos de datos, Variables

let name = '';

const nombre = '';

// JS5
function Carro() {

}

const bmw = new Carro();


// JS6 sugar syntax
class Carro {

}

const audi = new Carro();

{
    console.log();// accion
    console.log();
    console.log();
    console.log();
}

const frutas = [
    {nombre: 'pera', color: 'verde'}, 
    {nombre: 'manzana', color: 'roja'}, 
    {nombre: 'naranja', color: 'naranja'}
];

function filtrarFrutas(frutas) {
    return frutas.filter(fruta => fruta.color === 'roja')[0].nombre;
}

console.log(filtrarFrutas(frutas));


// camel case
// empezar por una letra, $, _
// [a-zA-Z,0-9]
// 0-9 no pueden comenzar con numeros

let manzana = 'manzana'; // camel case

console.log("Log this");
console.log("Log this too");

// primitivos, mutables
let edad = 32;
let nombre = 'aldo';
let soltero = true;
let suma = null;
edad = 33;

let edadAlfonso = edad;
edadAlfonso = 35;

console.log(edad, edadAlfonso);

// no primitivos, inmutables
const objeto = {
    propiedad: 'CASA'
}; // #FFF120
objeto.propiedad = 'DEPA';

const otroObjeto = objeto;

otroObjeto.propiedad = 'RANCHO';
const arreglos = []; // #FFF000

console.log(otroObjeto);// RANCHO o DEPA
console.log(objeto);// RANCHO o DEPA


class Carro extends Automovil { // herencia
    constructor(color, puertas) {
        this.color = color;
        this.puertas = puertas;
    }

    acelerar() {
        
    }

}


const bmw = new Carro('black', 4);
console.log(bmw);

var name;

console.log(name); // undefined

name = 'ALDO';

function contrasenaValida(string) {
    return string === 'fjfjfjfjfj' || string === 'asasasas';
}
contrasenaValida('asasasas'); // true
contrasenaValida('a'); // true
contrasenaValida('fjfjfjfjfj'); // true