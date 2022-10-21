/* eslint-disable */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        liveReload: true,
        hot: true,
        watchFiles: ['app/**/*.html', 'app/**/*.css, app/**/*.js', './*.html'],
        client: {
            overlay: {
                warnings: false,
                errors: true,
            },
        },
    },
});
