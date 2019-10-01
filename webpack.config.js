const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './app/scripts/index.js',

    output: {
        filename: 'scripts/tiny-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },

    devtool: 'inline-source-map',

    devServer: {
        // index: path.resolve(__dirname, 'index.html'),
        // contentBase: './dist'
    },

    optimization: {
        minimizer: [new UglifyJsPlugin({
            // sourceMap: true
        })]
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'app/index.html')
        })
      ]
};