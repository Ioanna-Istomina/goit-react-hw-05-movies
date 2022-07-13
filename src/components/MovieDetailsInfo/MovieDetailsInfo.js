import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import s from './MovieDetailsInfo.module.css';
const MovieDetailsInfo = ({ details }) => {
  const { poster_path, original_title, vote_average, overview, genres } =
    details;
  return (
    <main>
      <div className={s.container}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
          className={s.img}
        />
        <div className={s.description_container}>
          <h1>{original_title}</h1>
          <p>User Score: {Math.round(vote_average * 10)}% </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={s.list}>
            {genres?.map(({ name }) => (
              <li key={name} className={s.item}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.wrap}>
        <h3>Additional information</h3>
        <Link to={`cast`}>
          <p>Cast</p>
        </Link>
        <Link to={`reviews`}>
          <p>Reviews</p>
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetailsInfo;
