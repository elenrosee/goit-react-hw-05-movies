import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieReviewsById } from "../../../Services/apiService";
import styles from "./Reviews.module.scss";

export default function Reviews() {
  const { slug } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviewsById(slug.match(/[a-z0-9]+$/)[0]).then(setMovieReviews);
  }, [slug]);

  return (
    <Fragment>
      {movieReviews.total_results > 0 ? (
        <ul className={styles.ReviewsList}>
          {movieReviews.results.map(({ id, author, content }) => (
            <li key={id} className={styles.ReviewsItem}>
              <h4 className={styles.ReviewsAuthor}>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h4 className={styles.NoInfo}>
          We don't have any reviews for this movie.
        </h4>
      )}
    </Fragment>
  );
}
