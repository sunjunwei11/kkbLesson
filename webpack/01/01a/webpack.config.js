const path = require('path');

module.exports = {
    entry: {
        index: "./src/index.js",
        search: "./src/search.js"
    },
    output: {
        filename: "[name]_[chunkhash:6].js",
        path: path.resolve(__dirname, './dist')
    },
    mode: 'production'
}