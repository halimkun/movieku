import './assets/style/global.css'

import './components/nav-menu'
import './components/footer-custom'

import { urlParser } from './generator/url-parser'
import App from './app'
import './pages/home'


window.addEventListener('DOMContentLoaded', () => {
    const pagesContainer = document.querySelector('.page-content');
    const genresContainer = document.querySelector('.genre-list');
    const menuItem = document.querySelectorAll('.nav-menu-item');
    const searchInput = document.querySelector('#search-input');

    let page = 'home';
    const app = new App(page, pagesContainer);
    
    app.renderGenres(genresContainer);
    app.renderPage();

    menuItem.forEach(item => {
        item.addEventListener('click', (e) => {
            page = urlParser.parseUrl(item.getAttribute('href'));
            page.at(-1) !== 'home' ? genresContainer.classList.add('hidden') : genresContainer.classList.remove('hidden');
            page.at(-1) === 'home' ? resetGenre() : '';

            app.page = page.at(-1);
            app.renderPage();

            menuItem.forEach(item => {
                item.classList.remove('bg-emerald-500', 'border-emerald-500');
            });
            item.classList.add('bg-emerald-500', 'border-emerald-500');
        });
    })
    
    const resetGenre = () => {
        const genreItem = document.querySelectorAll('.genre-item');
        genreItem.forEach(item => {
            item.classList.remove('bg-emerald-500', 'border-emerald-500');
        });
        genreItem[0].classList.add('bg-emerald-500', 'border-emerald-500');
    }

    document.addEventListener('RENDER-BY-GENRES', (e) => {
        app.renderByGenre(e.detail)
    });

    document.addEventListener('RENDER-DETAIL', (e) => {
        app.renderDetail(e.detail.page, e.detail.id);
    })

    searchInput.addEventListener('keyup', (e) => {
        app.renderBySearch(e.target.value);
    })
});