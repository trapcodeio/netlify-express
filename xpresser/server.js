const xpresser = require('xpresser');
const path = require("path");

const $ = xpresser({
  name: 'Netlify Xpresser',

  server: {
    port: 3000
  },
  
  paths: {
    base: path.resolve('xpresser'),
    npm: path.resolve('node_modules'),
    views: 'base://views',
    routesFile: 'base://routes.js'
  }
});

$.logInfo($.$config.get('paths.views'));

module.exports = $;
