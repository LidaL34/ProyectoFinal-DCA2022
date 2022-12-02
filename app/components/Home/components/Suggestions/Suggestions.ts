export enum Info {
    'minipp' = 'minipp' ,
    'username' = 'username',
    'name' = 'name',
    'followed' = 'followed'
}

class Suggestions extends HTMLElement {
    minipp?: string;
    username?: string;
    name?: string;
    followed?: string;

    static get observedAttributes() {
        const attrs: Record <Info,null> = {
            minipp: null,
            username: null,
            name: null,
            followed: null
        };

        return Object.keys(attrs);
    }

    constructor (){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: Info, oldValue: string | undefined, newValue: string | undefined){
        if(this[propName] === newValue) return;
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
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