// This file code actully replaces the work of "webpack-dev-server", meaning it does exactly what "webpack-dev-server" did behined the scenes usin express.
import express from 'express';
import path from 'path';

const server = express();

const webpack = require('webpack');
const webpackConfig = require('../../config/webpack.dev');
const compiler = webpack(webpackConfig);

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, webpackConfig.devServer);
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

const staticMiddleware = express.static('dist');

server.use(staticMiddleware);
console.log('Elad Yair');

server.listen(8080, () => {
    console.log('Server is listening');
});
