export var Info;
(function (Info) {
    Info["minipp"] = "minipp";
    Info["username"] = "username";
    Info["name"] = "name";
    Info["followed"] = "followed";
})(Info || (Info = {}));
class Suggestions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            minipp: null,
            username: null,
            name: null,
            followed: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        if (this[propName] === newValue)
            return;
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `

             <link href="./components/Home/components/Suggestions/Suggest.css" rel="stylesheet">

                <section class="suggestions">

                    <div class="profiles">
                        <img src="${this.minipp}" alt="Suggestion">
                        <p><b>${this.username}</b></p>
                        <p>${this.followed}</p>
                    </div>
        
                </section>
            `;
        }
    }
}
customElements.define("my-info", Suggestions);
export default Suggestions;
