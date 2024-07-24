// VAR

// scope
function saludar() {
    var nombre = 'aldo';
    console.log(nombre); // aldo
}
console.log(nombre); // ReferenceError 

// reasignacion
var edad = 32;
edad = 22;

// redeclaracion
var edad = 32;
var edad;

console.log(edad); // undefined

// declarar sin valor inicial
var edad; // declarando sin valor inicial "guiño guiño(el compilador le pone undefined)"
edad = 0;

// se genera una propiedad en el objeto(contexto) global window(navegador), global(nodejs)
var edad = 10;
console.log(window.edad); // 10

// hoisting
var edad; // implicitamente eleva la declaracion de la variable
edad = 0;
console.log(edad);

// LET y CONST

// scope
let nombre = 'ALDO';
let otroNombre = 'JUAN';

function despedir() {
    let a = 0;
    {
        let b = 1;
        {
            let c = 2;
            {
                let d = 3; 
                console.log(a);
                console.log(b);
                console.log(c);
                console.log(d);
            }

        }
    }
}

despedir();

{
 let otroNombre = 'aldo';
 console.log(otroNombre);
}

console.log(otroNombre);

// reasignacion

let miVariable = 'valor';
miVariable = 'otro valor';

console.log(miVariable);

const PI = 3.1416;
PI = 4;

console.log(PI);

// redeclaracion
// let y const no permiten esto, o no tienen esta caracteristica

// declarar sin valor inicial
let canasta;
canasta = ['manzana', 'melon', 'uva'];

const PI = 3.1416;


// FUNCIONES

// declaracion(parametros = nombre de las variables temporales que usara la funcion)
function suma(numero1, numero2) {
    return numero1 + numero2;
}

function calculadora(numero1, numero2, operacion) {
    if(operacion === 'suma') {
        const resultadoDeLaSuma = suma(numero1, numero2);
        return resultadoDeLaSuma;
    }
} 

// ejecucion(argumentos = valores)
const resultado = calculadora(5, 20, 'suma');
console.log(resultado);

function perimetroCuadrado(sumaLadoMasLado, sumaLadoMasLado) {
    return sumaLadoMasLado + sumaLadoMasLado;
}
let lado = 5;
const perimetro = perimetroCuadrado(suma(lado, lado), suma(lado, lado));
console.log(perimetro);

function a(parametro) {
    return function b() {console.log(parametro)}
}

const a = function b() {console.log(parametro)};
console.log(a(10)());