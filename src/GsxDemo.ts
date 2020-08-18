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

  // need to define these to "freeze" the contents on init
  @property({type: Array}) _children: Array<NodeListOf<ChildNode>>;
  @property({type: String}) _textContent: string | null;
  @property({type: String}) _innerHTML: string;

  __increment() {
    this.counter += 1;
  }

  myTemplate = html`
    <div class="embeddedDiv">This is a lit-html template</div>
  `

  constructor() {
    super();
    this._children = this._getChildren();
    this._textContent = this.textContent;
    this._innerHTML = this.innerHTML;
  }

  _getChildren() {
    return Array.prototype.filter.call(this.childNodes, () => true);
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      ${this.myTemplate}

      <div class="embeddedDiv">
        <h3>The host's children:</h3>
        ${this._children.map((item) => html`${item}`)}
      </div>
      <div class="embeddedDiv">
        <b>this.innerHTML:</b> ${this._innerHTML}
      </div>
      <div class="embeddedDiv">
        <b>this.textContent:</b> ${this._textContent}
      </div>
    `;
  }
}
