import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const Images_API = "https://image.tmdb.org/t/p/w1280";

function MovieDetails(props) {

  const [ movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(Search_API + props.match.params.title);
  }, []);
  
  const getMovies= (API) =>{
    fetch(API)
    .then((res => res.json()))
      .then((data) => {
        setMovies(data.results);
    });
  }

  return (
      <div>
          <div className="movie-container">
              {movies
                  .filter((movie) => movie.title === (props.match.params.title))
                  .map((item) => {
                return (
                    <div className="movie-container1">
                        <div className="content">
                            <h1> Details </h1>
                            <h2>{item.title} <span> ({item.release_date})</span></h2>
                            <p className="rating">Rating: {item.vote_average}</p>
                            <div className="plot">
                                <img src={Images_API + item.poster_path} alt={item.title} />
                                <p>{item.overview}</p>
                            </div>
                            <p>Release Date: {item.release_date}</p>
                            <p>Total vote: {item.vote_count}</p>
                            <p>Original Language: {item.original_language}</p>
                            <p>Popularity count: {item.popularity}</p>
                            <Link to ="/moviecart">    
                                <button className="close">Close</button>
                            </Link>
                        </div>
                    </div>
                    );
                })}
          </div>
      </div>
  );
}

export default MovieDetails;
