const proxy = require('http-proxy-middleware');

   module.exports = function(app) {
       app.use(proxy('/api/**', { target: "https://discover-podcasts.herokuapp.com/", "changeOrigin": true }));
       app.use(proxy('/otherApi/**', { target: 'https://discover-pods-frontend.herokuapp.com' }));
   };
