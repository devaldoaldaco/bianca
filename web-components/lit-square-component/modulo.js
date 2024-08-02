import { LitElement, html, css } from 'lit';

// Ya no usa puro JS, Ahora usaremos lit element para construir el componente
export default class LitSquareComponent extends LitElement {
    static get properties() {
        return {
            color: { type: String },
            size: { type: String }
        }
    }

    constructor() {
        super();
    }

    static get styles() {
        return [
            css`
                section {
                    height: 50px;
                    width: 50px;
                    background-color: black;
                }
            `
        ]
    }

    changeNameValue() {
        this.fullName = {name: 'GONZALO', lastName: 'ALDACO'};// #111DEG
    }

    render() {
    //template tag literal function
        return html`
            <section style="background-color: ${this.color}; height: ${this.size}; width: ${this.size}"></section>
        `;
        // data binding
    }
}