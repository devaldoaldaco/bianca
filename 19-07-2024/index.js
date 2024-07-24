function numeroDeAes(palabra, caracter) {
    let contador = 0;
    for(let i = 0; i < palabra.length; i++) {
        if(palabra[i] === caracter) {
            contador = contador+1;
        }
    }
    return contador;
}

console.log(numeroDeAes('palabra', 'a'));

function numeroDeCaracteres(palabra, caracter) {
    return numeroDeAes(palabra, caracter);
}

console.log(numeroDeAes('palabra', 'l'));
console.log(numeroDeAes('palabra', 'p'));
console.log(numeroDeAes('palabra', ''));

// Algoritmo
//1.- Recorrer palabra (ir de letra por letra)
//2.- Comparar cada letra con el caracter 'a'
//3.- Contar el numero de veces que se repite la letra 'a'

const numero = new Number('10');
console.log(numero);
console.log(numero + numero);

const numero = new Number('10');
const string = new String('hola');
const bool = new Boolean('false');
const arr = new Array(1,2,3,4);
const obj = new Object(1,2,3,4);


// FUNCIONES 

function calcularArea(radio) {
    if(!radio) return 'No se puede calcular el area';
    const areaCirculo = Math.PI * Math.pow(r, 2); // NaN is "not a number"
    return areaCirculo; // undefined
}


function imprimirValor(callback) {
    console.log(callback());
}

imprimirValor(function(){return 10;});

//

function saludar() {
    console.log(arguments);
    console.log(this);
}

saludar(1,2,3,4);

const arrowFunction = () => {
    //console.log(arguments);
    console.log(this);
};

arrowFunction(1,2,3,4);

const alumno = {
    saludaArrow: () => {
        console.log(this);
        // this es el contexto de declaracion
    },
    saludaNormal: function() {
        console.log(this);
        // this es el contexto de ejecucion
    }
};

alumno.saludaArrow(); // this => Window
alumno.saludaNormal(); // this => alumno {}

// CICLOS Y ESTRUCTURAS DE CONTROL

if(nombre === 'aldo')  {
    // codigo del bloque se ejecutar
    console.log('entrar al bar');
} else {
    console.log('no puede entrar');
}

let edad = 18;
switch(edad) {
    case 18:
        console.log('entrar al bar');
        break;
    case 20:
    case 23:
}

//expresion ? console.log('true') : console.log('false');


for(let a = 0; a < 10; a++) {
    // 
    console.log(a);
}
const obj = {
    nombre: 'aldo',
    edad: 32,
    sexo: 'M',
};

// itera a traves de las llaves
for(const property in obj) {
    console.log(`${property}: ${obj[property]}`);
}
const arra = [1,2,3,4,5];
// colecciones de datos [], Map, WeakMap, Set itera a traves de los valores
for(const valor of arra) {
    console.log(valor);
}

let edad = 18;
while(edad >= 18) {
    console.log('While Mayor');
    edad++;
    if(edad === 22) {
        edad = 10;
    }
}

do {
    console.log('do While Mayor');
    edad++;
    if(edad === 22) {
        edad = 10;
    }
} while(edad >= 18);








