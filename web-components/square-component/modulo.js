// export function saludar() {
//     imprimirMensaje();
// }

// export function saludar1() {
//     imprimirMensaje();
// }
// export function saludar2() {
//     imprimirMensaje();
// }
// export function saludar3() {
//     imprimirMensaje();
// }

// function imprimirMensaje() {
//     console.log('Hola mundo');
// }

export default class SquareComponent extends HTMLElement {
    constructor() {
        super();
        this.size = '30px';
        this.color = 'black';
        this.attachShadow({ mode: "open" }); // Shadow Dom
    }

    // TODO: Investigar el ciclo de vida de un componente web
    connectedCallback() {
        this.render();
    }

    static observedAttributes = ['color', 'size'];
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
        if(name === 'color') {
            this.color = newValue;
        }

        if(name === 'size') {
            this.size = newValue; // JSON.parse
        }
    }

    render() {
        this.content = `
            <style>
                section {
                    background-color: ${this.color};
                    width: ${this.size};
                    height: ${this.size};
                }
            </style>
            <section></section>
        `;
        this.shadowRoot.innerHTML = this.content; // HTML Templates
    }
}