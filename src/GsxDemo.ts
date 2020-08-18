import { html, css, LitElement, property } from 'lit-element';

export class GsxDemo extends LitElement {
  static styles =css`
    :host {
      display: block;
      padding: 25px;
      color: var(--gsx-demo-text-color, #000);
    }
    .embeddedDiv {
      background: #ffc;
      padding: 10px;
      border: 1px solid #333;
    }
  `;

  @property({type: String}) title = 'Hey there';

  @property({type: Number}) counter = 5;

  __increment() {
    this.counter += 1;
  }

  myTemplate = html`
    <div class="embeddedDiv">This is a lit-html template</div>
  `

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      ${this.myTemplate}
    `;
  }
}
