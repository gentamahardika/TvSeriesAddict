import series from './series.js';
class DataSource {

    static searchSeries(query) {
        return fetch(`https://api.themoviedb.org/3/search/tv?api_key=450b5607a65f55b1ed5f82b4a0187749&language=en-US&page=1&query=Riverdale&include_adult=false}`)
            .then(response => {
                return response.json();
            })

            .then(responseJson => {
                if (responseJson.series) {
                    return Promise.resolve(responseJson.series);
                } else {
                    return Promise.reject(`${query} is not found`);
                }
            })
    }
}

export default DataSource;