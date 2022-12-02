class HeadBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
        console.log("connected");
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `

            <link href="./components/Home/components/Interface.css" rel="stylesheet">
            <link href="./components/Home/components/Suggestions/Suggest.css" rel="stylesheet">
            
            <header>
            <div class="container">
                <img src="./img/InstaLogo.png" alt="logo" class="logo">
                <img src="./img/Search_bar.png" alt="Search" class="search">
    
                <nav>
                    <ul>
                        <li><img src="./img/Icons/Home.png" alt="home"></li>
                        <li><img src="./img/Icons/Messenger.png" alt="messeges"></li>
                        <li><img src="./img/Icons/Add.png" alt="Upload"></li>
                        <li><img src="./img/Icons/Share.png" alt="Share"></li>
                        <li><img src="./img/Icons/Like.png" alt="Likes"></li>
                        <li><img src="./img/MiniPp/Minipp1.png" alt="Pp"></li>
                    </ul>
                </nav>
    
            </div>
        </header>

        <section class="storieBar"></section>

        <section class="suggestions">

                    <div class="profile">
                        <img src="./img/PpMain/pp1.png" alt="Pp">
                        <h1>lidelee_01113</h1>
                        <br>
                        <p>LidaLee</p>

                        <h2>Suggestions For You</h2>

                    </div>
        </section>
        
               `;
        }
    }
}
customElements.define("my-header", HeadBar);
export default HeadBar;
