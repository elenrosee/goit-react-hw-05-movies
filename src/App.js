import { Route, Switch } from "react-router";
import { Fragment } from "react";

import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import MovieDatailsPage from "./components/MovieDetailsPage";
import MoviesPage from "./components/MoviesPage";

export default function App() {
  return (
    <Fragment>
      <NavigationBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDatailsPage />
        </Route>

        <Route>
          <HomePage />
        </Route>
      </Switch>
    </Fragment>
  );
}
