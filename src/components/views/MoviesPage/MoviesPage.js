import { useState } from "react";
import Container from "../../Container";
import MoviesList from "../../MoviesList";
import Searchbar from "../../Searchbar";

export default function MoviesPage() {
  const [searchingMovies, setSearchingMovies] = useState([]);

  return (
    <Container>
      <Searchbar setSearchingMovies={setSearchingMovies} />
      <MoviesList arr={searchingMovies} />
    </Container>
  );
}
