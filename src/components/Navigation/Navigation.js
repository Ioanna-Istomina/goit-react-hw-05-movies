import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const toogleActive = active => {
  const { isActive } = active;
  return isActive ? s.active : s.unactive;
};

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={toogleActive}>
        Homepage
      </NavLink>
      <NavLink to="/movies" className={toogleActive}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
