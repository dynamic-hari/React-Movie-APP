import React from 'react';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header';
import Movie from './components/Movie';
import { BrowserRouter as Router, Route , Redirect} from 'react-router-dom';

function App() {

  return (
    <Router>
      <>
        <Header />
        <Route exact path="/" component={() => (<Redirect to='/moviecart' />)} />
        <Route exact path="/moviecart" component={Movie} />
        <Route path="/moviecart/:title/details" component={MovieDetails} />
      </>
    </Router>
  );
}

export default App;
