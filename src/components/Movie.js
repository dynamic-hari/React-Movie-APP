import React from 'react';
import '../index.css';
import './MovieDetails';


const Images_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average, release_date, vote_count, original_language, genre_name, popularity }) => (
    <div className="movie">
        <img src={Images_API + poster_path} alt={title}/>
        <div className="movieInfo">
            <h3>{title}</h3>
            <span> {vote_average} </span>
        </div>
        <div className="overview" tabIndex="1">
            <h2> Overview </h2>
            <p>{overview}</p>
        </div>
        <div className="popup">
            <div className="content">
                <h1> Details </h1>
                <h2>{title} <span> ({release_date})</span></h2>
                <p className="rating">Rating: {vote_average}</p>
                <div className="plot">
					<img src={Images_API + poster_path} alt={title} />
                    <p>{overview}</p>
                </div>
                <p>Release Date: {release_date}</p>
                <p>Total vote: {vote_count}</p>
                <p>Original Language: {original_language}</p>
                <p>Popularity count: {popularity}</p>
                <button className="close">Close</button>
            </div>
        </div>
    </div>
);

export default Movie;