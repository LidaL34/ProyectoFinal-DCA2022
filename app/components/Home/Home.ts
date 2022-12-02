import "./components/indexCom.js";
import HeadBar from "./components/Header/Header.js";
import InstaPost, {Post} from "./components/Post/Post.js";
import StoriesU, {AttributeStories} from "./components/Stories/Stories.js";
import Suggestions, {Info} from "./components/Suggestions/Suggestions.js";
import data from "./dataHome.js";

export class Home extends HTMLElement {
    headbar: HeadBar [] = [];
    post: InstaPost [] = [];
    stories: StoriesU [] = [];
    suggestions: Suggestions [] = [];

    constructor(){
        super();
        this.attachShadow ({mode: "open"});

        data.forEach ((user) =>{
            const userCard = this.ownerDocument.createElement ("my-profile") as Suggestions;

            userCard.setAttribute(Info.minipp, user.minipp);
            userCard.setAttribute(Info.name, user.name);
            userCard.setAttribute(Info.username, user.username);
            userCard.setAttribute(Info.followed, user.followed);
        });

        data.forEach ((storie) => {
            const userStorie = this.ownerDocument.createElement ("my-storie") as StoriesU;

            userStorie.setAttribute(AttributeStories.pp, storie.pp);
            userStorie.setAttribute(AttributeStories.username, storie.username);
        });

        data.forEach ((instaPost) => {
            const userPost = this.ownerDocument.createElement ("my-instaPost") as InstaPost;

            userPost.setAttribute(Post.pp, instaPost.pp);
            userPost.setAttribute(Post.username, instaPost.username);
            userPost.setAttribute(Post.location, instaPost.location);
            userPost.setAttribute(Post.img, instaPost.img);
            userPost.setAttribute(Post.likes, instaPost.likes);
            userPost.setAttribute(Post.info, instaPost.info);
            userPost.setAttribute(Post.comments, instaPost.comments);
            userPost.setAttribute(Post.date, instaPost.date);
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = "";

            this.headbar.forEach ((bar) =>{
                this.shadowRoot?.appendChild(bar);
            })

            this.post.forEach ((posts) =>{
                this.shadowRoot?.appendChild(posts);
            })

            this.stories.forEach ((st) =>{
                this.shadowRoot?.appendChild(st);
            })

            this.suggestions.forEach ((sgs) =>{
                this.shadowRoot?.appendChild(sgs);
            })
        }
    }
}

customElements.define ("app-home", Home);

    