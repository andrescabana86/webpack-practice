const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const PATHS = {
    app: path.join(__dirname, 'app'),
    built: path.join(__dirname, 'built'),
    favicon: path.join(__dirname, 'assets/favicon.png')
}

module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.built,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Webpack demo' }),
        new FaviconsWebpackPlugin(PATHS.favicon)
    ]
}