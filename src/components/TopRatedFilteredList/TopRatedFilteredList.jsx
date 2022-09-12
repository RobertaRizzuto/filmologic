
import styles from "./index.module.scss";
import { memo } from "react";

const TopRatedFilteredList = ({
  data,
  children,
  setModalVisibility,
  isModalVisibile,
  setModalData,
}) => {
  return (
    <div className={styles.TopRatedFilteredListSection}>
      <div className={styles.top}><h4>Filter Top rated films by average rating:</h4>
      {children}</div>
      <div className={styles.TopRatedFilteredList}>
      {data &&
        data.map((el,  i) => (
          <div key={i}
            className={styles.Card}
            onClick={() => {
              setModalVisibility(!isModalVisibile);
              setModalData(el);
            }}
          >
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w342${el.poster_path}`}
              alt={el.title}
            />
            <div className={styles.text}>
              <h4>{el.title}</h4>
              <p>{el.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(TopRatedFilteredList);
