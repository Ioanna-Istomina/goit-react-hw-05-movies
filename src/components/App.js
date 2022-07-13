import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Navigation = lazy(() =>
  import('./Navigation' /* webpackChunkName: "navigation" */)
);

const Homepage = lazy(() =>
  import('pages/Homepage' /* webpackChunkName: "homepage" */)
);

const Movies = lazy(() =>
  import('pages/Movies' /* webpackChunkName: "movies" */)
);

const MovieDetails = lazy(() =>
  import('pages/MovieDetails' /* webpackChunkName: "movieDetails" */)
);

const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast" */));

const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews" */)
);

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};
