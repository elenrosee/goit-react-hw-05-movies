import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.scss";

export default function NavigationBar() {
  return (
    <nav className={styles.navigationBar}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        HomePage
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </nav>
  );
}
