var express = require('express');
var axios = require('axios');
var router = express.Router(); // Create a new router instance

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_URL = process.env.OMDB_URL;


router.get('/search', (req, res, next) => {
  const title = req.query.title; // get the title from the query string in the URL, Specific to Express
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&s=${title}`;
  // axios.get -> returns a promise.
  // On a promis -> you have to do .then(when data is available)
  // callback pattern / Promises
  axios.get(url) // Could take a long time
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    })
});

router.get('/imdb/:imdbId', (req, res, next) => {
  const imdbId = req.params.imdbId;
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&i=${imdbId}`;
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    })
});

module.exports = router;
// Returning router from this file will make it available to the app.js file
