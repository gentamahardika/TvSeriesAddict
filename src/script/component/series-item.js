class SeriesItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        })
    }

    set series(series) {
        this._series = series;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
            background-color: white;
        }
        
         .backdrop_path {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        
        .series-info {
            padding: 10px;
        }
        
        .series-info>h2 {
            font-weight: lighter;
            padding: 10px;
        }
        
        .series-info>h4 {
            text-align: justify;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
        }
        
        .series-info>p {
            text-align: justify;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
            /* number of lines to show */
        }
        </style>
        
        <div class="series-info"> 
        <h2> ${this._series.name} </h2>
        <img class="backdrop_path" src="https://image.tmdb.org/t/p/w780/${this._series.backdrop_path}" alt="backdrop_path">
            <p> ${this._series.overview} </p>
            <h4>First Air Date: ${this._series.first_air_date} </h4>
            <h4>Rating: ${this._series.vote_average} </h4>
            <h4>Genre: ${this._series.genre_ids} </h4>
        </div>`;
    }
}

customElements.define("series-item", SeriesItem);
