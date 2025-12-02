const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: inline-block;
      font-family: sans-serif;
      position: relative; /* used for absolute position */
    }

    .toggle {
      cursor: pointer;
      padding: 6px 12px;
      border-radius: 4px;
      background-color: var(--dropdown-bg, #eee);
      color: var(--dropdown-color, #000);
      user-select: none;
      transition: background 0.3s;
    }

    .toggle:hover {
      background-color: var(--dropdown-hover-bg, #ddd);
    }

    .menu {
      list-style: none;
      padding: 0;
      margin: 0;
      overflow: hidden;
      max-height: 0;
      opacity: 0;
      transition: max-height 0.3s ease, opacity 0.3s ease;
      
      position: absolute; /* leave document flow */
      top: 100%; /* under toggle */
      left: 0;
      min-width: 100%; /* save width as toggle */
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      border-radius: 4px;
      z-index: 999;
      background-color: var(--dropdown-bg, #eee);
    }

    .menu.visible {
      max-height: 500px; /* large enough to show all the items */
      opacity: 1;
    }

    ::slotted(li) {
      padding: 8px 12px;
      cursor: pointer;
      transition: background 0.2s;
    }

    ::slotted(li:hover) {
      background-color: var(--dropdown-hover-bg, #ddd);
    }

    /* dark theme */
    :host([theme="dark"]) .toggle {
      background-color: #333;
      color: #fff;
    }
    :host([theme="dark"]) .toggle:hover {
      background-color: #444;
    }
    :host([theme="dark"]) .menu {
      background-color: #333;
      color: #fff;
    }
    :host([theme="dark"]) ::slotted(li:hover) {
      background-color: #444;
    }
  </style>

  <div class="toggle"></div>
  <ul class="menu">
    <slot></slot>
  </ul>
`;

console.log(template)
class SimpleDropdown extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.toggle = this.shadowRoot.querySelector(".toggle");
        this.menu = this.shadowRoot.querySelector(".menu");
    }

    connectedCallback(){
        this.toggle.textContent = this.getAttribute("label") || "Menu";
        const mode = this.getAttribute("mode") || "click";
        if (mode === "hover"){
            this.addEventListener("mouseenter",()=>this.menu.classList.add("visible"));
            this.addEventListener("mouseleave",()=>this.menu.classList.remove("visible"));
        }else{
            this.toggle.addEventListener("click",()=>this.menu.classList.toggle("visible"));
        };
    }
}

customElements.define("simple-dropdown",SimpleDropdown);