const servux = require('../lib/servux');
const app = servux();
const port = 3000;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});