import { Routes, Route } from 'react-router-dom';
import { Homepage } from 'pages/Homepage';
import MovieDetails from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import Navigation from './Navigation';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
};
