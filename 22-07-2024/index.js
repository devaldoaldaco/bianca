const variable = function saludar() {
    console.log('HOLA');
}

const arregloOriginal = [1,2,3,4];

const arregloMutado = arregloOriginal.map(function(element, index) {
    console.log(`Indice: ${index} tiene el valor: ${element}`);
    return element*2;
});

function retornaOtraFuncion() {
    return function() {
        return 'HOLA DESDE DENTRO DE LA FUNCION DE RETORNO';
    }
}

const func = retornaOtraFuncion();
console.log(func());

console.log(arregloMutado, arregloOriginal);

const obj = {
    nombre: 'aldo',
    edad: 32
};

console.log(obj);

function Carro(puertas, color) { // funciones constructoras(prototipo)
    console.log('se va a generar un objeto');
    this.puertas = puertas;
    this.color = color;
}
// blanco, 3
const carro = new Carro(3, 'blanco'); // construyendo
carro.color = 'rojo';
carro.puertas = 5;
console.log(carro);

const otroCarro = new Carro(4, 'negro');
console.log(otroCarro);

const num = new Number('10');
console.log(num);

// function Persona(nombre, edad) {
//     this.edad = edad;
//     this.nombre = nombre;
//     this.saludar = function() {    
//         console.log(this.nombre, this.edad);
//     }
// }

// const aldo = new Persona('aldo', 32);
// aldo.saludar(); // Hola mi nombre es aldo y tengo 32 años

// const cinthya = new Persona('cinthya', 28);
// cinthya.saludar(); // Hola mi nombre es cinthya y tengo 28 años

const a = 'LALALALAL';
console.log("El valor de a es:" + a + " " + "asdasdas");
console.log('El valor de a es:' + a + ' ' + 'asdasdas');
console.log(`El valor de a es: ${a} asasdas`); // back ticks

// ES6 classes, multiparadigma estructurada(c), funcional(python), poo(java)
//sugar syntax
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(this.nombre, this.edad);
    }
}

const aldo = new Persona('aldo', 32);
aldo.saludar();

// HERENCIA

class Animal {
    constructor() {
        this.duermen = 'si';
        this.comen = '';
    }

    hacerSonido() {
        console.log('este animal ', this.sonido);
    }
}
// HERENCIA cadena de prototipos (JS)
class Mamifero extends Animal {
    constructor(sonido) {
        super();
        this.nacen = 'mamá';
        this.sonido = sonido;
    }
}

class Oviparo extends Animal {
    constructor(sonido) {
        super();
        this.nacen = 'huevo';
        this.sonido = sonido;
    }
}

const serpiente = new Oviparo('ssss');
serpiente.hacerSonido();

const vaca = new Mamifero('muje');
vaca.hacerSonido();

console.log('nace de ', serpiente.nacen);
console.log('nace de ', serpiente.duermen);
console.log(vaca);


const n = [1,2,3,4,5]; // literal
const o = {} // literal

console.log(n, o);

const arreglo = new Array(1,2,3,4,5,6);

// Todo es un objeto
// si todos los valores del arreglo pasan el filtro, entonces every devuelve true
// si alguno de los valores del arreglo no pasan el filtro, entonces every devuelve false
Array.prototype.myOwnEvery = function(callback) {
    for(let i = 0; i < this.length; i++) {
        const resultado = callback(this[i]);
        if(resultado === false) {
            return false;
        }
    }
    return true;
}

console.log(arreglo.myOwnEvery((element) => element < 30));
console.log(arreglo.myOwnEvery((element) => element < 4));


const resultado = arreglo.every((element) => {element < 30});
console.log(resultado);

Array.prototype.myOwnMap = function(callback) {
    // let callback = (element) => {element < 30} // implicitamente
    let arregloResultante = [];
    for(let i = 0; i < this.length; i++) {
        arregloResultante.push(callback(this[i]));
    }
    return arregloResultante;
}

const r1 = arreglo.myOwnMap((element) => element+1);
console.log(r1);
const r2 = arreglo.map((element) => element+1);
console.log(r2);

Array.prototype.myOwnFilter = function(filtro) {
    let arregloResultante = [];
    for(let i = 0; i < this.length; i++) {
        if(filtro(this[i])) {
            arregloResultante.push(this[i]);
        }
    }
    return arregloResultante;
}

const r3 = arreglo.myOwnFilter((element) => element>2);
console.log(r3);

Array.prototype.myOwnReduce = function(filtro) {
    let arregloResultante = [];
    for(let i = 0; i < this.length; i++) {
        if(filtro(this[i])) {
            arregloResultante.push(this[i]);
        }
    }
    return arregloResultante;
}

const arreglo = new Array(1,2,3,4,5,6);
Array.prototype.myOwnReduce = function(callback, initialValue) {
    let valorRetorno = initialValue;
    for(let i = 0; i < this.length; i++) {
       valorRetorno = callback(valorRetorno, this[i], i);
    }
    return valorRetorno;
}

const t = arreglo.myOwnReduce((acumulador, elemento, indice) => {
    acumulador = {...acumulador, [indice+1]: elemento} // spread
    return acumulador;
}, {});

console.log(t);

const calificaciones = [10,10,10,10,10,10,10,10,10,10];

const prom = calificaciones.myOwnReduce((acu, item) => {
    acu = acu + item;
    return acu;
}, 0) / calificaciones.length;

console.log(prom)


const obj1 = {
    propiedad: () => {
        console.log(this);// Window
    }
}
const obj2 = {
    propiedad: function() {
        console.log(this);// obj2 {propiedad: [function]}
    }
}

obj1.propiedad();

obj2.propiedad();

