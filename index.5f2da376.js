const l=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};l();class r extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.title=this.getAttribute("title"),this.img=this.getAttribute("image"),console.log("constructor")}static get observedAttributes(){return["title","image"]}static get styles(){return`
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
    `}attributeChangedCallback(i,o,s){o!==s&&(this[i]=s),this.render()}connectedCallback(){console.log("connected"),this.render()}disconnectedCallback(){console.log("disconnected")}render(){this.shadowRoot.innerHTML=`
    <style>${r.styles}</style>
    <div class="container">
      <h1>${this.title}</h1>
      <p><slot name="text"></slot></p>
      <img src="${this.img}" alt="logo">
      <a class="nes-btn" href="#">Shadow</a>
    </div>`}}customElements.define("my-element",r);class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get observedAttributes(){return["title","image","collection","description","price"]}static get styles(){return`
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
    `}attributeChangedCallback(i,o,s){o!==s&&(this[i]=s,this.render())}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
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
          <h3>$${this.price|0} USD</h3>
          <button class="nes-btn is-primary">Buy</button>
        </div>
      </section>
    </div>`}}customElements.define("product-card",c);
