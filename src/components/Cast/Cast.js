import { getMovieCast } from '../../API/movie-api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastInfo from 'components/CastInfo';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(Number(movieId)).then(cast => setCast(cast));
  }, [movieId]);
  return (
    <div>
      {cast ? (
        <CastInfo cast={cast} />
      ) : (
        <h4>We don't have any cast for this movie.</h4>
      )}
    </div>
  );
};

export default Cast;
