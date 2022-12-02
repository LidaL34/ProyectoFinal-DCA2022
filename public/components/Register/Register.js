import { addUser } from "../../services/firebase.js";
export class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            addUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("register-completed", {
                        composed: true
                    });
                    console.log(this);
                    this.dispatchEvent(event);
                }
                else {
                    alert("<Already Registered>");
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link href="./components/register.css"  rel="stylesheet">
        <section>
            <div class = "card">
            <img src= "./img/InstaLogo.png" alt="pic" class = "logo"> 
            <h3 class = "title">Register to see photos and videos from your friends</h3>
            <app-form></app-form>
         </section>

        `;
    }
}
customElements.define("app-register", Register);
