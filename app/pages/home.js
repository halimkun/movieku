import MovieRequest from './../data/movie-request';
import generateMovieItem from './../generator/movie-item';
import { urlParser } from './../generator/url-parser';

const Home = {
    render() {
        return `
            <div class="py-4 px-3 md:px-10 lg:px-32 movie-list columns-2 md:columns-4 lg:columns-5 2xl:columns-4"></div>
        `;
    },

    async loadPageContent(genre = '') {
        const movieData = genre !== '' ? await MovieRequest.getMovieByGenre(genre) : await MovieRequest.getDiscover();

        const movieListContainer = document.querySelector('.movie-list');
        movieListContainer.innerHTML = '';

        this._renderElements({
            data: movieData,
            template: generateMovieItem,
            container: movieListContainer
        })
    },

    async loadSearchResult(query) {
        const movieData = await MovieRequest.getSearchResult(query);

        const movieListContainer = document.querySelector('.movie-list');
        movieListContainer.innerHTML = '';

        this._renderElements({
            data: movieData,
            template: generateMovieItem,
            container: movieListContainer
        })
    },

    _renderElements({
        data,
        template,
        container,
    }) {
        data.results.forEach((dataMovie) => {
            container.innerHTML += template(dataMovie);

        });

        const btnDetail = document.querySelectorAll('.btn-detail');
        btnDetail.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const url = urlParser.parseUrl(btn.getAttribute('href'));
                document.dispatchEvent(new CustomEvent('RENDER-DETAIL', { detail: { "page": url[0], "id": url[1] } }));
            });
        })
    },
}

export default Home;