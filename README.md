![Servux Logo](/assets/servux.png)

A Web Framework for node that puts UX first.

```js
const Servux = require('servux');
const app = new Servux();
const port = 3000;

app.get('/api/hello', (req, res, next) => {
  res.end('Hello Servux!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// This is a Place Holder. Servux is still in development.
```