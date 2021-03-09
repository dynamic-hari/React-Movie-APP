import React, {useEffect, useState} from 'react';
import MovieDetails from './MovieDetails';
import '../index.css';
import { Route, Link} from 'react-router-dom';

const Feautered_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Images_API = "https://image.tmdb.org/t/p/w1280";

function Movie() {

  const [ movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  var val=1;

  useEffect(() => {
    getMovies(Feautered_API + val);
  }, []);
  
  const getMovies= (API) =>{
    fetch(API)
    .then((res => res.json()))
      .then((data) => {
      setMovies(data.results);
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(Search_API + searchTerm);
      setSearchTerm('');
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
      <div>
          <header>
            <form onSubmit={handleOnSubmit}>
              <input className="search" type="text" placeholder="Search here..." value={searchTerm} onChange={handleOnChange}/>
            </form>
          </header>
          <div className="movie-container">
              {movies.map((movie) => {
                return (
                  <div className="movie">
                      <img src={Images_API + movie.poster_path} alt={movie.title} />
                    <div className="movieInfo">
                      <h3>{movie.title}</h3>
                      <span> {movie.vote_average} </span>
                    </div>
                    <div className="overview">
                        <Link
                            to={`/moviecart/${movie.title}/details`}
                            key={movie.title}>
                        <h2> Overview </h2>
                        </Link>
                        <p>{movie.overview}</p>
                    </div>
                    <Route path="moviecart/:title/details" component={MovieDetails} />
                  </div>
                );
            })}
          </div>
      </div>
  );
}

export default Movie;
