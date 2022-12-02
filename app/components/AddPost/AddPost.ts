import { addPost } from "../../services/firebase";

export class AddPost extends HTMLElement {
    username = "";
    img = "";
    info = "";

    constructor(){
        super();
        this.attachShadow ({mode: "open"});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot.querySelector("button");
        btn?.addEventListener("click", async () => {

            if (this.username && this.img && this.info){
                const dataPost = {
                    username: this.username,
                    img: this.img,
                    info: this.info 
                } 
                try {
                    await addPost (dataPost);
                    alert ("Post Added");

                    const evt: CustomEvent = new CustomEvent ("Done", {
                        composed: true
                    });

                    this. dispatchEvent(evt);

                } catch (error) {

                    alert ("We couldn't add the post, sorry")
                    console.error (error);

                }
            } else {

                alert("Missing information");
            }
        })

        this.addListener();
    }

    addListener (){
        const post = this.shadowRoot.querySelector ('post')
        post.addEventListener ("changed", (evt) => {
            evt.preventDefault();
            const username = (evt.target as HTMLInputElement).value || "";
            const img = (evt.target as HTMLInputElement).value || "";
            const info = (evt.target as HTMLInputElement).value || "";

            console.log ({username,img,info});
            addPost ({username,img,info});
        })
    }

    render(){
        if(!this.shadowRoot) return;
            this.shadowRoot.innerHTML = `
                <form>
                    
                    <label for="UserName">UserName<label>      
                        <input name="UserName"/>

                    <label for="Img">Img<label>      
                        <input name="Img"/>

                     <label for="Info">Info<label>      
                        <input name="Info"/>
                        
                    <button type="submit">Upload</button>
                </form>
            `  
    }
}

customElements.define ('my-newpost',AddPost); 