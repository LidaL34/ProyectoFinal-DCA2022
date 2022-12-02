import "./components/indexCom.js";
import { Post } from "./components/Post/Post.js";
import { AttributeStories } from "./components/Stories/Stories.js";
import { Info } from "./components/Suggestions/Suggestions.js";
import data from "./dataHome.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.headbar = [];
        this.post = [];
        this.stories = [];
        this.suggestions = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const userCard = this.ownerDocument.createElement("my-profile");
            userCard.setAttribute(Info.minipp, user.minipp);
            userCard.setAttribute(Info.name, user.name);
            userCard.setAttribute(Info.username, user.username);
            userCard.setAttribute(Info.followed, user.followed);
        });
        data.forEach((storie) => {
            const userStorie = this.ownerDocument.createElement("my-storie");
            userStorie.setAttribute(AttributeStories.pp, storie.pp);
            userStorie.setAttribute(AttributeStories.username, storie.username);
        });
        data.forEach((instaPost) => {
            const userPost = this.ownerDocument.createElement("my-instaPost");
            userPost.setAttribute(Post.pp, instaPost.pp);
            userPost.setAttribute(Post.username, instaPost.username);
            userPost.setAttribute(Post.location, instaPost.location);
            userPost.setAttribute(Post.img, instaPost.img);
            userPost.setAttribute(Post.likes, instaPost.likes);
            userPost.setAttribute(Post.info, instaPost.info);
            userPost.setAttribute(Post.comments, instaPost.comments);
            userPost.setAttribute(Post.date, instaPost.date);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.headbar.forEach((bar) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(bar);
            });
            this.post.forEach((posts) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(posts);
            });
            this.stories.forEach((st) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(st);
            });
            this.suggestions.forEach((sgs) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(sgs);
            });
        }
    }
}
customElements.define("app-home", Home);
