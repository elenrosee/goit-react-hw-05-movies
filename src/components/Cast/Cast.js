import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./Cast.module.scss";
import { fetchMovieCastById } from "../../Services/apiService";
import photo from "../../img/avatar.jpg";

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    fetchMovieCastById(movieId).then(setMovieCast);
  }, [movieId]);

  return (
    <Fragment>
      {movieCast && (
        <ul className={styles.Gallery}>
          {movieCast.cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className={styles.GalleryItem}>
              <img
                src={
                  profile_path
                    ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`
                    : `${photo}`
                }
                alt={name}
                className={styles.GalleryImage}
              ></img>
              <div className={styles.ActorInfo}>
                <h4>{name}</h4>
                <p>{character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
