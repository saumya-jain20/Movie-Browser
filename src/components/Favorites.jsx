import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import '../App.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="favorites-page">
      <h2>Your Favorite Movies</h2>
      <div className="movie-list">
        {favorites.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;