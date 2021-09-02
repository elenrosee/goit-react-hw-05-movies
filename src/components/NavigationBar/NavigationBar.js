import { Fragment, memo } from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container";
import styles from "./NavigationBar.module.scss";

function NavigationBar() {
  return (
    <Fragment>
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
      <hr />
    </Fragment>
  );
}

export default memo(NavigationBar);
