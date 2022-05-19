const express = require('express');
const cors = require('cors');
const axios = require('axios');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;
const HOST = 'localhost';
const API_BASE_URL = `https://api.deezer.com`;

const artist = (artist) => `${API_BASE_URL}/artist/${artist}`;
const search = (query) => `${API_BASE_URL}/search/artist?q=${query}`;

// app.options('*', cors());

// parse JSON
app.use(express.json());

app.use(cors());

const API_SERVICE_URL = `${API_BASE_URL}/search/artist?q=''`;

app.use(
  '/search-artist',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/search-artist`]: '',
    },
  })
);

// app.get('/search_artist', (req, res, next) => {
//   // const artist = req.params.query;
//   const artist = 'eminem';
//   if (artist) {
//     axios.get(search(artist)).then((ax_res) => {
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       res.setHeader('Access-Control-Allow-Methods', '*');
//       res.setHeader('Access-Control-Allow-Headers', '*');
//       res.send(ax_res.data);
//     });
//   }
// });

// app.get('/search_artist', (req, res) => {
//   res.status().send(200);
// });

app.get('/', (req, res) => {
  res.send('Nodejs Deezer Proxy');
});

app.listen(PORT, HOST, () => {
  `Listening on ${HOST} on PORT ${PORT}`;
});
