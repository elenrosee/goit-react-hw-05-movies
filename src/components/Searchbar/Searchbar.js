import { memo, useState } from "react";
import { fetchMovieByName } from "../../Services/apiService";
import styles from "./Searchbar.module.scss";

function Searchbar({ setSearchingMovies }) {
  const [request, setRequest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (request.trim()) {
      fetchMovieByName(request).then(addSearchingMovies);
    } else {
      alert("Enter search request");
    }
  };

  const addSearchingMovies = ({ results }) => {
    setSearchingMovies([...results]);
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
