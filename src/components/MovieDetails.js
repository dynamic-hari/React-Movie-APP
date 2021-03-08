import React, {useEffect, useState} from 'react';
import Movie from './Movie';
import '../index.css';

const Feautered_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const Search_API ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function MovieDetails() {
  
  const [ movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(Feautered_API);
  }, []);
  
  const getMovies= (API) =>{
    fetch(API)
    .then((res => res.json()))
      .then((data) => {
        console.log(data);
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
            {movies.map((movie) => 
              <Movie key={movie.id} {...movie}/>
            )}
          </div>
      </div>
  );
}

export default MovieDetails;