import config  from "../config";
import poster_placeholder from "./../assets/img/poster_placeholder.jpg";

const generateMovieItem = (movie) => {
    let template = '';
    template += `
        <div class="bg-white break-inside-avoid mb-4 w-full rounded-lg shadow-md hover:shadow-xl transition-shadow hover:text-slate-900" data-id="${movie.id}">
            <a href="#detail/${movie.id}" class="cursor-pointer btn-detail text-left">
                <img src="${poster_placeholder}" alt="${movie.title}" class="w-full rounded-t-lg duration-100 animate-pulse">
                <div class="px-3 pt-2 pb-3">
                    <div class="font-semibold leading-[20px] text-base">
                        ${movie.title}
                    </div>
                    <div class="mt-2 text-xs font-light text-gray-500">${movie.release_date.replaceAll('-', '/')}</div>
                </div>
            </a>
        </div>
    `;
    
    const img = new Image();
    img.onload = () => {
        const imgContainer = document.querySelector(`[data-id="${movie.id}"] img`);
        imgContainer.src = `${config.get('base_img_url')}${movie.poster_path}`;
        imgContainer.classList.remove('animate-pulse');
    }
    img.src = `${config.get('base_img_url')}${movie.poster_path}`;

    return template;
}

export default generateMovieItem;