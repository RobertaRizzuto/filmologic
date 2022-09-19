
import styles from "./index.module.scss";
import { memo, useContext } from "react";
import { ThemeContext } from '../../App';

const TopRatedFilteredList = ({
  data,
  children,

}) => {
  const theme = useContext(ThemeContext);
  return (
    <div ref={theme.filterRef} className={styles.TopRatedFilteredListSection}>
      <div className={styles.top}><h4>Filter Top rated films by average rating:</h4>
      {children}</div>
      <div className={styles.TopRatedFilteredList}>
      {data &&
        data.map((el,  i) => (
          <div key={i}
            className={styles.Card}
            onClick={() => {
              theme.setModalVisibility(!theme.isModalVisibile);
              theme.setModalData(el);
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
