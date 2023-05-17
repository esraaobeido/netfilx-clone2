import React, { useState } from 'react';
import Movie from '../Movie/Movie';
import FavList from '../FavList/FavList';
import './MovieList.css';

function MovieList(props) {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleMovieAdded = (movie) => {
    setFavoriteMovies((prevMovies) => [...prevMovies, movie]);
  };

  const { movieData } = props;

  return (
    <>
      <div className="movie-list">
        {movieData.map((movie, idx) => (
          <Movie key={idx} movie={movie} posterUrl={movie.posterUrl} title={movie.title} onMovieAdded={handleMovieAdded} />
        ))}
      </div>
      <FavList favoriteMovies={favoriteMovies} />
    </>
  );
}

export default MovieList;
       