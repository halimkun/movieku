import config from "./../config";

class MovieRequest {
    static async getDiscover() {
        try {
            const res = await fetch(config.getEndpoint('discover'));
            const data = await res.json();
            return data;
        } catch (e) {
            return {
                message: "Error get all movie.",
            }
        }
    }

    static async getGenres() {
        try {
            const res = await fetch(config.getEndpoint('genres'));
            const data = await res.json();
            return data;
        } catch (e) {
            return {
                message: "Error get all genres.",
            }
        }
    }

    static async getMovieByGenre(genre) {
        try {
            const res = await fetch(config.getEndpoint('movie_by_genre') + genre);
            const data = await res.json();
            return data;
        } catch (e) {
            return {
                message: "Error get movie by genre.",
            }
        }
    }

    static async getMovieDetail(id) {
        try {
            const res = await fetch(config.getEndpoint('detail') + id + "?api_key=" + config.get('api_key'));
            const data = await res.json();
            return data;
        } catch (e) {
            return {
                message: "Error get movie detail.",
            }
        }
    }

    static async getSearchResult(query) {
        try {
            const res = await fetch(config.getEndpoint('search') + "&query=" + query);
            const data = await res.json();
            return data;
        } catch (e) {
            return {
                message: "Error get search result.",
            }
        }
    }
}

export default MovieRequest;