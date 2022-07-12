import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../API/movie-api';
import MovieDetailsInfo from 'components/MovieDetailsInfo';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(Number(movieId)).then(details => setDetails(details));
  }, [movieId]);

  return <>{details && <MovieDetailsInfo details={details} />}</>;
};

export default MovieDetails;
