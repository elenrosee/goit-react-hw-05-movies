import { Fragment, useEffect, useState } from "react";
import {
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router";
import { NavLink } from "react-router-dom";
import { fetchMovieById } from "../../Services/apiService";
import styles from "./MovieDatailsPage.module.scss";
import Cast from "../Cast";
import Container from "../Container";
import Reviews from "../Reviews";

export default function MovieDatailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const goBack = () => {
    history.push(location.state.prevPath);
  };

  return (
    <Fragment>
      <button type="button" onClick={goBack}>
        Go back
      </button>
      <Container>
        {movie && (
          <div className={styles.MovieContainer}>
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
              alt={movie.original_title}
            ></img>
            <div className={styles.MovieInfo}>
              <h2 className={styles.TextTitle}>
                {movie.original_title} (
                {new Date(movie.release_date).getFullYear()})
              </h2>
              <p>User Score {movie.vote_average * 10}%</p>
              <h3 className={styles.TextTitle}>Overview</h3>
              <p>{movie.overview}</p>
              <h3 className={styles.TextTitle}>Genres</h3>
              <p>{Array.from(movie.genres, (el) => el.name).join(" ")}</p>
            </div>
          </div>
        )}
      </Container>
      <hr />
      <Container>
        <h3 className={styles.TextTitle}>Additional information</h3>
        <ul className={styles.NavList}>
          <li>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { prevPath: location.state.prevPath },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { prevPath: location.state.prevPath },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </Container>
      <hr />
      <Container>
        <Route path={`/movies/:movieId/cast`}>
          <Cast />
        </Route>

        <Route path={`/movies/:movieId/reviews`}>
          <Reviews />
        </Route>
      </Container>
    </Fragment>
  );
}
