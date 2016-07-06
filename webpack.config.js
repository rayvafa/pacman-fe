var path = require('path');
module.exports = {
    entry: './src/js/index.js',
    devtool: 'source-map',
    output: {
        path: './lib/scripts/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: './src/js/',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};