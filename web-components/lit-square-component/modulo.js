import { LitElement, html } from 'lit';

// Ya no usa puro JS, Ahora usaremos lit element para construir el componente
export default class LitSquareComponent extends LitElement {
    static get properties() {
        return {
            fullName: {type: Object},
            listTodos: {type: Boolean}
        }
    }

    constructor() {
        super();
        this.fullName = {name: 'ALDO', lastName: 'ALDACO'};// #FFF000

    }

    changeNameValue() {
        this.fullName = {name: 'GONZALO', lastName: 'ALDACO'};// #111DEG
    }

    render() {
    //template tag literal function
        return html`
            <h2>${this.fullName.name} ${this.fullName.lastName}</h2>
            <button @click="${this.changeNameValue}">Cambiar valor del nombre</button>
            <todo-list ?listTodos="${this.listTodos}"></todo-list>
        `;
        // data binding
    }
}