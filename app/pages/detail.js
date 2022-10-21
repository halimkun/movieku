import MovieRequest from "../data/movie-request";
import config from "../config";

const Detail = {
    render() {
        return (`
            <div class="movie-backdrop">
                <div class="movie-backdrop-color py-16 px-10 flex flex-col md:flex-row items-center" style="background-image: linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) 150px, rgba(31.5, 31.5, 31.5, 0.84) 100%);">
                    
                </div>
            </div>
        `);
    },

    async loadPageContent(id) {
        const movieData = await MovieRequest.getMovieDetail(id);

        const movieBackdrop = document.querySelector('.movie-backdrop');
        const movieBackdropColor = document.querySelector('.movie-backdrop-color');

        movieBackdrop.style.backgroundImage = `url(${config.get('backdrop_img_url') + movieData.backdrop_path})`;

        movieBackdropColor.innerHTML = `
            <div class="w-[30%]">
                <img src="${config.get('base_poster_url') + movieData.poster_path}" class="rounded-md" />
            </div>
            <div class="w-[70%] pr-20">
                <h1 class="text-4xl font-bold text-white">${movieData.title} <span class="font-normal">(${movieData.release_date.split('-')[0]})</span></h1>
                <p class="sd text-white mt-1"></p>
                <div class="mt-3 flex gap-3">
                    <div class="border transition-color px-3 py-1 rounded border-white text-white text-xl w-fit hover:text-slate-800 hover:bg-yellow-400 hover:border-yellow-500">
                        <span class="mr-1">★</span> ${movieData.vote_average.toFixed(2)}
                    </div>
                    <div class="border transition-color px-3 py-1 rounded border-white text-white text-xl w-fit hover:text-slate-800 hover:bg-yellow-400 hover:border-yellow-500 uppercase">
                        ${movieData.original_language}
                    </div>
                </div>
                <div class="mt-5 mb-3 text-white">
                    <h1 class="font-semibold text-2xl">Overview</h1>
                    <p class="font-xl mt-1">${movieData.overview}</p>
                </div>
                <div class="mt-9 mb-3">
                    <a class="px-5 py-4 bg-yellow-400 hover:bg-yellow-500 font-bold text-slate-80 rounded-lg" target="_blank" href="https://www.imdb.com/title/${movieData.imdb_id}/">
                        Show On IMDB
                    </a>
                </div>
            </div>
        `;

        const sd = document.querySelector('.sd');

        sd.innerHTML += `
            <span class="text-white px-1">${movieData.status}</span> •
            <span class="text-white px-1">${movieData.genres.map(genre => genre.name).join(', ')}</span> •
            <span class="text-white px-1">${movieData.runtime} minutes</span>`;
    }
}

export default Detail;