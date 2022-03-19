class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["title", "image", "collection", "description", "price"];
  }

  static get styles() {
    return /* css */`
      @import url('https://unpkg.com/nes.css@latest/css/nes.min.css');
      :host {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
      }
      .container {
        display: flex;
        width: 80%;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: var(--color-primary);
        color: var(--color-text);
      }

      .img-box img {
        position: relative;
        max-width: 300px;
        top: 25%;
      }

      .img-box {
        position: relative;
        padding: 1rem;
      }

      .img-box:before {
        content: "Nike";
        position: absolute;
        font-size: 2rem;
        opacity: 0.3;
        color: #000;
      }

      .main {
        background-color: #fff;
        padding: 1.5rem;
      }

      .title {
        font-size: 1.1rem;
      }

      .collection {
        font-size: 1rem;
        opacity: 0.5;
        padding-top: 1rem;
      }

      .description {
        font-size: 0.7rem;
        padding-left: 1.5rem;
      }

      .stars {
        padding: 0.5rem 0;
      }

      .sale {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
      }

      @media screen and (min-width: 600px) {
        .container {
          width: 80%;
        }
        .title {
          font-size: 1.5rem;
        }
        .img-box img {
          top: 10%;
          left: 30%;
          transform: scale(1.1) rotate(-30deg);
        }
      }

      @media screen and (min-width: 768px) {
        .container {
          width: 50%;
          flex-wrap: nowrap;
        }

        .img-box img {
          top: 35%;
          left: 0%;
          transform: scale(1.2) rotate(-30deg);
        }
      }
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ProductCard.styles}</style>
    <div class="container">
      <section class="img-box">
        <img src="${this.image}" alt="nike">
      </section>
      <section class="main">
        <h2 class="title">${this.title}</h2>
        <div class="stars">
          <!-- star -->
          <i class="nes-icon is-small star"></i>
          <i class="nes-icon is-small star"></i>
          <i class="nes-icon is-small star"></i>
          <i class="nes-icon is-small star is-half"></i>
          <i class="nes-icon is-small star is-transparent"></i>
        </div>
        <h3 class="collection">${this.collection}</h3>
        <p class="description">${this.description}</p>
        <div class="sale">
          <h3>$${this.price | 0} USD</h3>
          <button class="nes-btn is-primary">Buy</button>
        </div>
      </section>
    </div>`;
  }
}

customElements.define("product-card", ProductCard);
