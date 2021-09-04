import { Fragment, lazy, Suspense, useEffect, useState } from "react";
import {
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router";
import { NavLink } from "react-router-dom";
import { fetchMovieById } from "../../../Services/apiService";
import styles from "./MovieDatailsPage.module.scss";

const Cast = lazy(() => import("../Cast" /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import("../Reviews" /* webpackChunkName: "Reviews" */)
);

export default function MovieDatailsPage() {
  const { slug } = useParams();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetchMovieById(slug.match(/[a-z0-9]+$/)[0]).then(setMovie);
  }, [slug]);

  const goBack = () => {
    history.push(location?.state?.prevPath ?? "/");
  };

  return (
    movie && (
      <Fragment>
        <button type="button" onClick={goBack}>
          &#8592; Go back
        </button>
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
        <hr size="1" />
        <h3 className={styles.TextTitle}>Additional information</h3>
        <ul className={styles.NavList}>
          <li>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { prevPath: location?.state?.prevPath ?? "/" },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { prevPath: location?.state?.prevPath ?? "/" },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <hr size="1" />
        <Suspense fallback={<h4>Loading...</h4>}>
          <Route path={`/movies/:slug/cast`}>
            <Cast />
          </Route>

          <Route path={`/movies/:slug/reviews`}>
            <Reviews />
          </Route>
        </Suspense>
      </Fragment>
    )
  );
}
