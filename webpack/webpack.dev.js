const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        historyApiFallback: true,
        proxy: {
            '/api': {
                changeOrigin: true,
                cookieDomainRewrite: 'localhost',
                target: 'http://localhost:5000',
                onProxyReq: (proxyReq) => {
                    // Browers may send Origin headers even with same-origin
                    // requests. To prevent CORS issues, we have to change
                    // the Origin to match the target URL.
                    if (proxyReq.getHeader('origin')) {
                        proxyReq.setHeader('origin', 'http://localhost:5000');
                    }
                },
            },
        },
    },
});
