class DataSource {

    static searchSeries(query) {
        return fetch(`https://api.themoviedb.org/3/search/tv?api_key=450b5607a65f55b1ed5f82b4a0187749&query=${query}&include_adult=false`)
            .then(response => {
                return response.json();
            })

            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${query} is not found`);
                }
            })
    }

}


export default DataSource;
