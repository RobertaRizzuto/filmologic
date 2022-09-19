import { useEffect, useCallback, memo, useContext } from "react";
import { GET } from "../../utils/api.js";

import styles from "./index.module.scss";

import { ThemeContext } from "../../App";

const MovieEntity = () => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    theme.searchQuery.length > 1 &&
      GET(
        "search",
        "movie",
        `&query=${theme.searchQuery}&page=1&include_adult=false`
      ).then((data) => {
        theme.setMovieData(data.results[0]);
        theme.setModalData(data.results[0]);
      });
  }, [theme.searchQuery]);

  useEffect(() => {
    GET("movie", theme.movieID).then((data) => {
      theme.setMovieData(data);
      theme.setModalData(data);
    });
  }, [theme.movieID]);

  const onHandleClick = useCallback(
    () => theme.setModalVisibility(true),
    [theme.isModalVisibile]
  );

  const { poster_path, original_title, genres, vote_average, tagline, title } =
    theme.movieData;

  return (
    <div className={styles.movieEntity}>
      <div className={styles.info}>
        <div className={styles.title}>
          <p>title</p>
          <h1>{title}</h1>
        </div>
        <div className={styles.bottom}>
          <p>rating</p>
          <p>{vote_average || "not found"}</p>
          <p>genre</p>
          <ul>
            {genres &&
              genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={original_title}
      />
      <div className={styles.book}>
        <p className={styles.tagline}>{tagline}</p>
        <button onClick={onHandleClick} className={styles.btn}>
          details
        </button>
      </div>
    </div>
  );
};

export default memo(MovieEntity);
