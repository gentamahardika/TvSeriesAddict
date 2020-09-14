theMovieDb.genres.getTvList(genre_ids) {
    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=450b5607a65f55b1ed5f82b4a0187749`)
        .then(response => {
            return response.json();
        })

        .then(responseJson => {
            if (responseJson.genres) {
                return Promise.resolve(responseJson.genres);
            } else {
                return Promise.reject(responseJson.error);
            }
        })

}