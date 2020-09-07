import './series-item.js';

class SeriesList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set series(series) {
        this._series = series;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0, 0, 0, 0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._series.forEach(series => {
            const seriesItemElement = document.createElement("series-item");
            seriesItemElement.series = series;
            this.shadowDOM.appendChild(seriesItemElement)
        });
    }
}

customElements.define("series-list", SeriesList);