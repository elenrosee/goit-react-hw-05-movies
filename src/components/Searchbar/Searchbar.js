import { memo, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { fetchMovieByName } from "../../Services/apiService";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.scss";

function Searchbar({ setSearchingMovies }) {
  const [request, setRequest] = useState("");
  const history = useHistory();
  const location = useLocation();

  const searchQueryUrl = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!searchQueryUrl) {
      return;
    }

    fetchMovieByName(searchQueryUrl).then(({ results }) => {
      setSearchingMovies([...results]);
    });
  }, [searchQueryUrl, setSearchingMovies]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (request.trim()) {
      fetchMovieByName(request).then(({ results }) => {
        setSearchingMovies([...results]);
      });
      history.push({
        ...location,
        search: `query=${request}`,
      });
    } else {
      alert("Enter search request");
    }
  };

  return (
    <div className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <input
          className={styles.SearchForm_input}
          type="text"
          name="request"
          autoComplete="off"
          onChange={(e) => {
            setRequest(e.currentTarget.value);
          }}
          value={request}
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit" className={styles.SearchForm_button}>
          <span className={styles.SearchForm_button_label}></span>
        </button>
      </form>
    </div>
  );
}

export default memo(Searchbar);

Searchbar.propTypes = {
  setSearchingMovies: PropTypes.func.isRequired,
};
