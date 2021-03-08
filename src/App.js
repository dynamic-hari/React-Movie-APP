import React from 'react';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <>
        <Route exact path="/" component={() => (<Redirect to='/moviecart' />)} />
        <MovieDetails />
      </>
    </Router>
  );
}

export default App;
