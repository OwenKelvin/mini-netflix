const express = require('express');
const app = express();
const port = 3000;
const apiKey = 'api_key=93939d67fe9e2a5e4ca0a0d8ec3c700d';
let searchApi = `https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&page=1&include_adult=false`;
let genresApi = `https://api.themoviedb.org/3/genre/movie/list?${apiKey}`;
const api = `https://api.themoviedb.org/3/movie/top_rated?${apiKey}`;
const api_helper = require('./API_helper');

app.get('/', (req, res) =>
  res.send('Welcome to Make REST API Calls In Express!')
);

app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));

app.get('/movies', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  api_helper
    .make_API_call(api)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.send(error);
    });
});
app.get('/movies/page/:page', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  api_helper
    .make_API_call(api + '&page=' + req.params.page)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.send(error);
    });
});

app.get('/movies/genres', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  api_helper
    .make_API_call(genresApi)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.send(error);
    });
});

app.get('/movies/search/:query', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  api_helper
    .make_API_call(searchApi + '&query=' + req.params.query)
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.send(error);
    });
});

app.get('/movie/:id', (req, res) => {
  res.setHeader( 'Access-Control-Allow-Origin', 'http://localhost:4200' );
  api_helper
    .make_API_call(
      `https://api.themoviedb.org/3/movie/` + req.params.id + `?${apiKey}`
    )
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.send(error);
    });
});