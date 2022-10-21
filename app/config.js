class Config {
    constructor() {
        this.config = {
            'api_key': 'd6e72fc299486bf54477c7ac3f72ae21',
            'base_url': 'https://api.themoviedb.org/3',
            'base_img_url': 'https://image.tmdb.org/t/p/w500',
            'base_poster_url': 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2',
            'original_img_url': 'https://image.tmdb.org/t/p/original',
            'backdrop_img_url': 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces',
        };

        this.endpoint = {
            'discover': `${this.get('base_url')}/discover/movie?api_key=${this.get('api_key')}`,
            'detail': `${this.get('base_url')}/movie/`,
            'search': `${this.get('base_url')}/search/movie?api_key=${this.get('api_key')}`,
            'movie_by_genre': `${this.get('base_url')}/discover/movie?api_key=${this.get('api_key')}&with_genres=`,
            'genres': `${this.get('base_url')}/genre/movie/list?api_key=${this.get('api_key')}&&language=en-US`,
        }
    }
    
    get(key) {
        return this.config[key];
    }

    getEndpoint(key) {
        return this.endpoint[key];
    }
}

export default new Config();