const express = require( 'express' )
const app = express()
const port = 3000
const api = "https://api.themoviedb.org/3/movie/top_rated?api_key=93939d67fe9e2a5e4ca0a0d8ec3c700d"
const api_helper = require( './API_helper' )

app.get( '/', ( req, res ) => res.send( 'Welcome to Make REST API Calls In Express!' ) )

app.listen( port, () => console.log( `App listening on port ${ port }!` ) )

app.get( '/movies', ( req, res ) => {
  res.setHeader( 'Access-Control-Allow-Origin', 'http://localhost:4200' );
  api_helper.make_API_call( api )
    .then( response => {
      res.json( response )
    } )
    .catch( error => {
      res.send( error )
    } )
})
app.get( '/movies/page/:page', ( req, res ) => {
  res.setHeader( 'Access-Control-Allow-Origin', 'http://localhost:4200' );
  api_helper.make_API_call( api + "&page=" + req.params.page )
      .then( response => {
      res.json( response )
    } )
    .catch( error => {
      res.send( error )
    })
})