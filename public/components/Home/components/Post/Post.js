export var Post;
(function (Post) {
    Post["pp"] = "pp";
    Post["username"] = "username";
    Post["location"] = "location";
    Post["img"] = "img";
    Post["likes"] = "likes";
    Post["info"] = "info";
    Post["comments"] = "comments";
    Post["date"] = "date";
})(Post || (Post = {}));
class InstaPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
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
    connectedCallback() {
        this.render();
        console.log("si");
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        if (this[propName] === newValue)
            return;
        this[propName] = newValue;
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <img src= ${this.pp}>

            `;
        }
    }
}
customElements.define("my-post", InstaPost);
export default InstaPost;
