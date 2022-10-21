import { routes } from "./routes";
import { urlParser } from "./generator/url-parser";
import MovieRequest from "./data/movie-request";

class App {
    constructor(page, pageContainer) {
        this.pageContainer = pageContainer;
        this.page = page;
    }

    async renderPage() {
        const page = routes[this.page];
        this.pageContainer.innerHTML = page.render();
        await page.loadPageContent();
    }
    
    async renderDetail(page, id) {
        const detailPage = routes[page];
        this.pageContainer.innerHTML = detailPage.render();
        await detailPage.loadPageContent(id);
    }

    async renderByGenre(genre) {
        const page = routes[this.page];
        this.pageContainer.innerHTML = page.render();
        await page.loadPageContent(genre);
    }

    async renderBySearch(query) {
        if (query !== '') {
            const page = routes[this.page];
            this.pageContainer.innerHTML = page.render();
            await page.loadSearchResult(query);
        } else {
            this.renderPage();
        }
    }

    async renderGenres(genresContainer) {
        genresContainer.innerHTML = '<nav class="bg-slate-800 lg:mx-32 md:mx-10 px-3 md:px-0 gap-2 py-2 genre-items no-scrollbar overflow-x-scroll flex"></nav>';
        const genreItems = document.querySelector('.genre-items');

        const g = await MovieRequest.getGenres();
        genreItems.innerHTML += '<div class="px-3 py-[1px] border rounded-full capitalize text-white w-fit whitespace-nowrap cursor-pointer genre-item" data-genre="">All</div>';
        g.genres.forEach(genre => {
            genreItems.innerHTML += `
                <div class="px-3 py-[1px] border rounded-full capitalize text-white w-fit whitespace-nowrap cursor-pointer genre-item" data-genre="${genre.id}">${genre.name}</div>
            `;
        });

        const genreItem = document.querySelectorAll('.genre-item');
        genreItem.forEach(item => {
            item.addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent('RENDER-BY-GENRES', { detail: item.dataset.genre }));
                genreItem.forEach(item => {
                    item.classList.remove('bg-emerald-500', 'border-emerald-500');
                });
                item.classList.add('bg-emerald-500', 'border-emerald-500');
            });
        })
    }


}

export default App;