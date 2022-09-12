import styles from "./index.module.scss";
import { memo } from "react";

const Upcoming = ({ data, setModalVisibility, isModalVisibile, setModalData}) => {
  
  
  return (
    <div className={styles.Upcoming}>
      {data &&
        data.reverse().map((data,  i) => (
          <div key={i}
            className={styles.Card}
            onClick={() => {
              setModalVisibility(!isModalVisibile);
              setModalData(data);
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
export default memo(Upcoming);
