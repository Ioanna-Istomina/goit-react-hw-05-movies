import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';
import { getSearchMovieList } from 'API/movie-api';
import { useState, useEffect } from 'react';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    getSearchMovieList(query).then(setMovie);
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={setQuery} />
      {query && <MovieList movies={movies} />}
    </>
  );
};
