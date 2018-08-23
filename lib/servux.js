/*!
 * servux
 * Copyright(c) 2018 Kaycee Ingram
 * MIT Licensed
 */

const fs = require('fs');
const url = require('url');
const http = require('http');
const servux = {};
const app = () => servux;

servux.use = () => {
  //
};

servux.router = { /*  */ };

servux.get = () => {
  //
};

servux.post = () => {
  //
};

servux.put = () => {
  //
};

servux.delete = () => {
  //
};

servux.listen = (port, callback) => {
  http.createServer().listen(port);
  callback();
};

module.exports = app;