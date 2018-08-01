const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
server.get('*', (req, res) => handle(req, res));

app.prepare()
  .then(() => {
    server.listen(port, (err) => {
      if (err) throw err;
      // eslint-disable-next-line
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
