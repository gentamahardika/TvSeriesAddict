class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
        }
        
        .search-container>input {
            width: 75%;
            padding: 16px;
            border: 50;
            border-color: #e60000;
            font-weight: bold;
            border-radius: 16px;
        }
        
        .search-container>input:focus {
            outline: 0;
        }
        
        .search-container>input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container>input::placeholder {
            color: #e60000;
            font-weight: normal;
        }
        
        .search-container>button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 10px 20px;
            background-color: #e60000;
            color: white;
            border: 0;
            text-transform: uppercase;
            border-radius: 16px;
        }
        
        .search-container>button:hover {
            background-color: #e23b3b;
        }
        
        @media screen and (max-width: 550px) {
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container>input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container>button {
                width: 100%;
            }
        }
        </style>
        <div id="search-container" class="search-container">
        <input placeholder="Search Tv Series Here..." id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
    </div>`;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);