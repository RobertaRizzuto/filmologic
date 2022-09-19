import styles from "./index.module.scss";
import { memo, useContext } from "react";
import { ThemeContext } from "../../App";
const Popular = ({
  data
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.Popular}>
    
      {data &&
        data.reverse().map((data, i) => (
          <div
            key={i}
            className={styles.Card}
            onClick={() => {
              theme.setModalVisibility(!theme.isModalVisibile);
              theme.setModalData(data);
            }}
          >
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
              alt={data.title}
            />
            <div className={styles.text}>
              <h4>{data.title}</h4>
              <p>{data.vote_average}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default memo(Popular);
