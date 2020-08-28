const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const dotenv = require('dotenv')

module.exports = (env, args) => {
    const localhostDomain = 'tinyjs.globoi.com'
    let currentEnv = args.qa ? 'qa' : args.mode

    currentEnv = args.staging ? 'staging' : currentEnv

    const dotEnvConfig = dotenv.config()

    const dotEnvParse = dotenv.parse(
        fs.readFileSync(`${__dirname}/.env.${currentEnv}`)
    )

    const dotEnvVars = Object.assign(dotEnvConfig.parsed, dotEnvParse)

    return {
        entry: './app/scripts/index.js',

        output: {
            filename: 'tiny.js',
            path: path.resolve(__dirname, 'js'),
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
            ],
        },

        devtool: 'inline-source-map',

        devServer: {
            historyApiFallback: false,
            host: localhostDomain,
            http2: true,
            https: {
                key: fs.readFileSync('server.key'),
                cert: fs.readFileSync('server.crt'),
            },
        },

        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            drop_console: true,
                        },
                    },
                    // sourceMap: true
                }),
            ],
        },

        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'app/index.html'),
            }),
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(dotEnvVars),
            }),
        ],
    }
}
