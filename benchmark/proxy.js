const proxy = require('../')
require('http').createServer(function (req, res) {
  proxy.web(req, res, {
    hostname: 'localhost',
    port: 9000
  }, err => console.error(err))
}).listen(8000)