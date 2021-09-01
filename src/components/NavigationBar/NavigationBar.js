import { memo } from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container";
import styles from "./NavigationBar.module.scss";

function NavigationBar() {
  return (
    <Container>
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
    </Container>
  );
}

export default memo(NavigationBar);
