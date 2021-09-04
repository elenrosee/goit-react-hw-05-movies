import { Fragment, useState } from "react";
import MoviesList from "../../MoviesList";
import Searchbar from "../../Searchbar";

export default function MoviesPage() {
  const [searchingMovies, setSearchingMovies] = useState([]);

  return (
    <Fragment>
      <Searchbar setSearchingMovies={setSearchingMovies} />
      <MoviesList arr={searchingMovies} />
    </Fragment>
  );
}
