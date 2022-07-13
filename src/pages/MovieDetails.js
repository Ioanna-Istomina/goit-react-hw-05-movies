import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from '../API/movie-api';
import MovieDetailsInfo from 'components/MovieDetailsInfo';

const MovieDetails = () => {
  const location = useLocation();
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  const backLink = useRef(location.state?.from ? location.state.from : '/');

  useEffect(() => {
    getMovieDetails(Number(movieId)).then(details => setDetails(details));
  }, [movieId]);

  return (
    <>
      <Link to={backLink.current}>Go Back</Link>
      {details && <MovieDetailsInfo details={details} />}
    </>
  );
};

export default MovieDetails;
