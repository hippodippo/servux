/*!
 * servux
 * Copyright(c) 2018 Kaycee Ingram
 * MIT Licensed
 */

// 'use strict';

// module.exports = require('./lib/servux');

const servux = require('./lib/servux');
const app = servux();
const port = 3000;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});