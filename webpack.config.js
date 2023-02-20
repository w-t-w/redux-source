const path = require('path');
const open = require('open');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUTPUT_DIR = path.resolve(process.cwd(), 'build');
const TEMPLATE_DIR = path.resolve(process.cwd(), 'src', 'index.ejs');

const PORT = 4000;

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        publicPath: '',
        path: OUTPUT_DIR,
        filename: 'js/[name].[fullhash].js',
        chunkFilename: 'js/[name].[fullhash].js'
    },
    devServer: {
        port: PORT,
        static: OUTPUT_DIR,
        historyApiFallback: true,
        compress: true,
        open: {
            app: {
                name: open.apps.chrome
            }
        },
        hot: true,
        proxy: {}
    },
    stats: {
        preset: 'minimal'
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'thread-loader'
            }, {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            publicPath: './',
            filename: 'index.html',
            template: TEMPLATE_DIR,
            inject: 'body',
            minify: true
        })
    ]
};