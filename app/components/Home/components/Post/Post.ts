export enum Post {
    "pp" = "pp",
    "username" = "username",
    "location" = "location",
    "img" = "img",
    "likes" = "likes",
    "info" = "info",
    "comments" = "comments",
    "date" = "date"
}

class InstaPost extends HTMLElement {
    pp?: string;
    username?: string;
    location?: string;
    img?: string;
    likes?: string;
    info?: string;
    comments?: string;
    date?: string;

    static get observedAttributes (){
        const attrs: Record<Post,null> = {
            pp: null,
            username: null,
            location: null,
            img: null,
            likes: null,
            info: null,
            comments: null,
            date: null
        };

        return Object.keys(attrs);
    }

    constructor (){
        super();
        this.attachShadow ({mode: "open"});
    }

    connectedCallback(){
        this.render();
        console.log("si")
    }

    attributeChangedCallback(propName: Post, oldValue: string | undefined, newValue: string | undefined){
        if(this[propName] === newValue) return;
        this[propName] = newValue;
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `

            <link href="./src/components/post/style.css" rel="stylesheet">
            <section>
                <div class="square">
                    <img src= ${this.pp} alt="profile" class="profile">
                    <img src="./img/icons/settings.png" alt="more" class="settings">
                    <img src="./img/icons/ring.png" alt="story" class="story">
            
                <p class="title">
                    <b>${this.username}</b>
                 <br>
                    ${this.location}
                </p>
            
                <img src= ${this.img} alt="fondo" width="300" height="300">
            
                <div>
                    <img src="./img/icons/heart.png" alt="like" class="like">
                    <img src="./img/icons/chat.png" alt="comments" class="comment">
                    <img src="./img/icons/send.png" alt="share" class="share">
            
                <img src="./img/icons/save.png" alt="save" class="save">
                </div>
            
                <div class="allText">
            
                <p class="lowertext">
                    <b>${this.likes}</b>
                <br>
                    <b>${this.username}</b>
                    <i style="color: rgb(43, 181, 223);">${this.info} </i>
            
                </p>
            
                <p class="subtext">
                    ${this.comments}   
                </p>
            
                <p class="date">
                    ${this.date}
                </p>
                </div>
            </div>
        </section>

            `
        }
    }
}

customElements.define ("my-post", InstaPost);
export default InstaPost;