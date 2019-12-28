const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
//const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    mode: 'development',
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: 'dist',
        open: true,
        hot: true,
        overlay: true,
        stats: {
            colors: true
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    // * The HTMLWebpackPlugin is taking care of this 2 loaders job
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name: '[name].html'
                    //     }
                    // },
                    // {
                    //     loader: 'extract-loader'
                    // },
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]' // Setting the location of the images folder for all the images files in it.
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new HTMLWebpackPlugin({ template: './src/index.html' })
    ]
};
