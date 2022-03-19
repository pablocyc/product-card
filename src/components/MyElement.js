class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.title = this.getAttribute("title");
    this.img = this.getAttribute("image");
    console.log("constructor");
  }

  static get observedAttributes() {
    return ["title", "image"];
  }

  static get styles() {
    return /* css */`
      @import url('https://unpkg.com/nes.css/css/nes.css');
      :host {
        --color-text: purple;
      }

      h1 {
        color: var(--color-text);
      }

      p {
        color: red;
      }
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
    this.render();
  }

  connectedCallback() {
    console.log("connected");
    this.render();
  }

  disconnectedCallback() {
    console.log("disconnected");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${MyElement.styles}</style>
    <div class="container">
      <h1>${this.title}</h1>
      <p><slot name="text"></slot></p>
      <img src="${this.img}" alt="logo">
      <a class="nes-btn" href="#">Shadow</a>
    </div>`;
  }
}

customElements.define("my-element", MyElement);
