export const urlParser = {
    
    parseUrl(url) {
        let urlSplit = url.split('#');
        urlSplit = urlSplit[1].split('/');

        if(urlSplit == 0) {
            return urlSplit[0];
        } else {
            return urlSplit;
        }
    },

    parseUrlMerged() {
        const url = window.location.hash.replace('#', '');
        const splited = this._urlSpliter(url);
        return this._urlMerger(splited);
    },

    // parseUrl() {
    //     const url = window.location.hash.replace('#', '');
    //     return this._urlSpliter(url);
    // },

    _urlSpliter(url) {
        const splited = url.split('/'); /* ['', 'path', 'id'..] */
        const [, path, id] = splited;
        return {
            path,
            id,
        };
    },

    _urlMerger(url) {
        return (url.path ? `${url.path}` : '/') + (url.id ? '/:id' : '');
    },
} 