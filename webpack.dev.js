const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
mode: 'development',
devServer: {
    port: "9500",
    open: true,
    liveReload: true
},
});

// Not using