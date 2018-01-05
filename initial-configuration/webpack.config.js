const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    app: path.join(__dirname, 'app'),
    built: path.join(__dirname, 'built')
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
        new HtmlWebpackPlugin({ title: 'Webpack demo' })
    ]
}