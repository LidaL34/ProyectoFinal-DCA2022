import { queryUser } from "../../services/firebase.js";

export class Login extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;

            queryUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("login-success",{
                        composed: true
                    })
                    console.log(this);

                    this.dispatchEvent(event);
                }else{
                    alert("Wrong user");
                }
            })
        })

        const loginBtn = this.shadowRoot?.querySelector('button');
        loginBtn.addEventListener('click', () => {
            const event: CustomEvent = new CustomEvent ('register', {
                composed: true
            });

            this.dispatchEvent(event);
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link href="./components/login.css"  rel="stylesheet">

        <form class="form card">
            <div class="card_header">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                </svg>
                <h1 class="form_heading">Sign in</h1>
             </div>

            <div class="field">
                <label for="username">Username</label>
                <input class="input" name="username" type="text" placeholder="Username" id="username">
            </div>

            <div class="field">
                <label for="password">Password</label>
                <input class="input" name="user_password" type="password" placeholder="Password" id="password">
            </div>

             <div class="field">
                <button class="button">Login</button>
            </div>
        </form>
        
        <section>
        <div class="card">
        <img src= "./img/InstaLogo.png" alt="pic" class = "logo"> 
            <app-form></app-form>
        </section>
        `
    }
}

customElements.define("app-login",Login);

