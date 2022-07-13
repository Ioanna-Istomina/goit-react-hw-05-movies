import { getTrendingMovie } from '../API/movie-api';
import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';

const Homepage = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(setMovie);
  }, []);

  return (
    <div>
      <h1 style={{ paddingLeft: '20px' }}>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Homepage;
