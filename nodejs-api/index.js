const express = require('express');
const cors = require('cors');
const axios = require('axios');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;
const HOST = 'localhost';
const API_BASE_URL = `https://api.deezer.com`;

// parse JSON
app.use(express.json());

app.use(cors());

const SEARCH_ALL_ARTISTS_API_SERVICE_URL = `${API_BASE_URL}/search/artist?order=ARTIST_ASC&q='a'`;
const SEARCH_ARTIST_API_SERVICE_URL = `${API_BASE_URL}/search/artist`;
const SEARCH_ARTIST_BY_ID_API_SERVICE_URL = `${API_BASE_URL}/artist`;

app.get('/search-artist', async (req, res) => {
  let artist_name = req.query.query;
  let request = axios.get(`${SEARCH_ALL_ARTISTS_API_SERVICE_URL}`);

  if (artist_name) {
    request = axios.get(`${SEARCH_ARTIST_API_SERVICE_URL}?q=${artist_name}`);
  }

  request
    .then((response) => {
      let artist = response.data;

      return res.send(artist);
    })
    .catch((err) => {
      console.log('ERROR WHEN Searching ARTIST:', err);
      return res.send('Error Searching Artist');
    });
});

app.get('/artist', async (req, res) => {
  let artist_id = req.query.id;
  const request = axios.get(
    `${SEARCH_ARTIST_BY_ID_API_SERVICE_URL}/${artist_id}`
  );

  request
    .then((response) => {
      let artist_details = {};
      let artist_data = response.data;

      if (typeof artist_data === 'object') {
        artist_details.data = artist_data;

        //get the artists top tracks
        axios
          .get(`${SEARCH_ARTIST_BY_ID_API_SERVICE_URL}/${artist_id}/top`)
          .then((resp) => {
            console.log('THE ARTISTS TOP TRACKS', resp);
            artist_details.data.tracks = resp.data.data;
          })
          .then(() => {
            axios
              .get(`${SEARCH_ARTIST_BY_ID_API_SERVICE_URL}/${artist_id}/albums`)
              .then((response) => {
                artist_details.data.albums = response.data.data;
                return res.send(artist_details);
              })
              .catch((err) => {
                console.log('ERROR FETCHING ARTISTS Albums', err);
                res.send('Error Fetching Artists Albums');
              });
          })
          .catch((err) => {
            console.log('ERROR FETCHING ARTISTS TOP TRACKS', err);
            res.send('Error Fetching Artists Tracks');
          });
      } else {
        return res.send(artist_details);
      }
    })
    .catch((err) => {
      console.log('ERROR WHEN FETCHING ARTIST DETAILS:', err);
      return res.send('Error Fetching Artists Details');
    });
});

app.get('/', (req, res) => {
  res.send('Nodejs Deezer Proxy');
});

app.listen(PORT, HOST, () => {
  `Listening on ${HOST} on PORT ${PORT}`;
});
