import { Route, Switch } from "react-router";
import { lazy, Suspense } from "react";

import Container from "./components/Container";
import NavigationBar from "./components/NavigationBar";

const MovieDatailsPage = lazy(() =>
  import(
    "./components/views/MovieDetailsPage" /* webpackChunkName: "MovieDatailsPage" */
  )
);
const MoviesPage = lazy(() =>
  import("./components/views/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const HomePage = lazy(() =>
  import("./components/views/HomePage" /* webpackChunkName: "HomePage" */)
);

export default function App() {
  return (
    <Container>
      <NavigationBar />
      <hr size="1" />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:slug">
            <MovieDatailsPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
