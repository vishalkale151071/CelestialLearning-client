const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/',
        createProxyMiddleware({
            target: "https://api-celestiallearning.herokuapp.com"
        })
    );
}