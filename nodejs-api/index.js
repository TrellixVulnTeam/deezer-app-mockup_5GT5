const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

const deezer_api = `https://cors-anywhere.herokuapp.com/https://api.deezer.com`;
const artist = (artist) => `${deezer_api}/artist/${artist}`;
const search = (query) => `${deezer_api}/search?q=${query}`;

app.options('*', cors());

// parse JSON
app.use(express.json());

app.post('/search_artist', (req, res, next) => {
  const artist = req.params.query;
  if (artist && artist.length > 0) {
    axios.get(search(artist)).then((ax_res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.send(ax_res.data);
    });
  }
});

app.get('/search_artist', (req, res) => {
  res.status().send(200);
});

app.get('/', (req, res) => {
  res.send('Nodejs Deezer Proxy');
});

app.listen(port, () => {
  `Listening on port ${port}`;
});
