import { useEffect, useCallback, memo } from "react";
import { GET } from "../../utils/api.js";

import styles from "./index.module.scss";

const MovieEntity = ({
  movieData, setMovieData,
  movieID, setMovieId,
  setModalData,
  setModalVisibility,
  isModalVisibile,searchQuery
}) => {
 
  

useEffect(() => { searchQuery.length > 1 &&
  GET( "search",
          "movie",
          `&query=${searchQuery}&page=1&include_adult=false`).then((data) => {
    setMovieData(data.results[0]);
    setModalData(data.results[0]);
    
  });
}, [searchQuery]);

  useEffect(() => {
    GET("movie", movieID).then((data) => {
      setMovieData(data);
      setModalData(data);
     
    });
  }, [movieID]);

  const onHandleClick = useCallback(
    () => setModalVisibility(true),
    [isModalVisibile]
  );

  const { poster_path, original_title, genres, vote_average, tagline, title } =
    movieData;

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
