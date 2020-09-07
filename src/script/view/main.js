import '../component/series-list.js'
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const seriesListElement = document.querySelector("series-list");

    const onButtonSearchClicked = () => {
        DataSource.searchSeries(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        seriesListElement.series = results;
    };

    const fallbackResult = message => {
        seriesListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;