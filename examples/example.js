const Servux = require('../lib/servux');
const app = new Servux();
const port = 3000;

app.get('/', (req, res, next) => {
  res.end('Hello Kaycee!');
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});