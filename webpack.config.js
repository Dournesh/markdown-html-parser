const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, './src/markdown-html-parser.js'),

    output: {
        path: path.resolve(__dirname, './lib'),
        filename: 'markdown-html-parser.js',
	    library: 'markdown-html-parser',
	    libraryTarget: 'umd'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: 'babel-loader',
        }]
    }
};

