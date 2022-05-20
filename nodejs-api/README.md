### NODEJS - EXPRESS REST API TEMPLATE

This repository A NodeJS Express based REST API to proxy data from the deezer api

## STARTING THE APPLICATION

To start the server, simply run: `npm start` and it should run on `localhost/3000`

## MIDDLEWARES USED

1. bodyparser - to get contents of the http request body
2. CORS - To enable cross origin resource sharing
3. AXIOS - Fetching data from proxied deezer api

## Defined routes

1. `/search-artist` - Searches for an artist based on the query name provided in the parameters
2. `/artist` - Fetches artist details based on id provided from query parameters
