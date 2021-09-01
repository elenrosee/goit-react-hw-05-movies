import { useState, useEffect } from "react";
import { fetchTrendingMovie } from "../../Services/apiService";
import styles from "./HomePage.module.scss";

import Container from "../Container";
import MoviesList from "../MoviesList";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovie("movie", "day").then(addTrendingMovies);
  }, []);

  const addTrendingMovies = ({ results }) => {
    setTrendingMovies([...results]);
  };

  return (
    <Container>
      <h1 className={styles.Title}>Trending today</h1>
      <MoviesList arr={trendingMovies} />
    </Container>
  );
}
