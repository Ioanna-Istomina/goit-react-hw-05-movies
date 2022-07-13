import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../API/movie-api';
import ReviewsDetails from 'components/ReviewsDetails';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(Number(movieId)).then(reviews => setReviews(reviews));
  }, [movieId]);
  console.log(reviews);
  return (
    <div>
      {reviews?.length > 0 ? (
        <ReviewsDetails reviews={reviews} />
      ) : (
        <h4 style={{ marginLeft: '40px' }}>
          We don't have any reviews for this movie.
        </h4>
      )}
    </div>
  );
};

export default Reviews;
