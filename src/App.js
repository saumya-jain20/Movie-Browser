import React, { useState, useEffect } from 'react';
import { fetchMovies } from './utils/api';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import Favorites from './components/Favorites';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const fetchMoreMovies = () => {
    setPage((prev) => prev + 1);
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreMovies);

  useEffect(() => {
    if (query) {
      fetchMovies(query, page).then((data) => {
        setMovies((prev) => (page === 1 ? data : [...prev, ...data]));
        setIsFetching(false);
      });
    } else {
      setMovies([]);
    }
  }, [query, page]);

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Movie Browser</h1>
          <nav className="nav-icons">
            <Link to="/" className="icon-button">
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to="/favorites" className="icon-button">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar onSearch={handleSearch} />
                  {query ? (
                    <>
                      <div className="movie-list">
                        {movies.map((movie) => (
                          <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                      </div>
                      {isFetching && <p className="loading">Loading more movies...</p>}
                    </>
                  ) : (
                    <div className="placeholder-message">
                      <h2>Welcome to Movie Browser!</h2>
                      <p>Start searching for your favorite movies by typing in the search box above.</p>
                    </div>
                  )}
                </>
              }
            />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>
            &copy; Movie Browser. Made with ❤️ by Saumya Jain
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;