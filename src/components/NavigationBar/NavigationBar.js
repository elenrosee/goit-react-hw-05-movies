import { Fragment, memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.scss";

function NavigationBar() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default memo(NavigationBar);
