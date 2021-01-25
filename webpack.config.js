const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const dotenv = require('dotenv')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, args) => {
    const isDevelopment = args.mode === 'development'
    const localhostDomain = 'tinyjs.globoi.com'
    let currentEnv = args.qa ? 'qa' : args.mode

    currentEnv = args.staging ? 'staging' : currentEnv

    const dotEnvConfig = dotenv.config()

    const dotEnvParse = dotenv.parse(
        fs.readFileSync(`${__dirname}/.env.${currentEnv}`)
    )

    const dotEnvVars = Object.assign(dotEnvConfig.parsed, dotEnvParse)

    return {
        entry: './app/index.ts',

        output: {
            filename: 'LPHelpers.js',
            path: path.resolve(__dirname, 'build'),
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },

                {
                    test: /\.s(a|c)ss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    loader: [
                        'style-loader',
                        'css-loader',

                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment,
                            },
                        },
                    ],
                },

                {
                    test: /\.(svg|png|jpe?g|gif|ttf|eot|woff|woff2)$/i,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets',
                        publicPath: 'assets',
                        name(file) {
                            return 'images/[name].[ext]'
                        },
                    },
                },

            ],
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.scss'],
            plugins: [new TsconfigPathsPlugin()]

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
