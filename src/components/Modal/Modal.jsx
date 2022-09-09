import styles from "./index.module.scss";
import { memo } from "react";

const Modal = ({ data, isVisibile, onModalClick }) => {
  return (
    isVisibile && (
      <div className={styles.modal} onClick={() => onModalClick(false)}>
        <div className={styles.main}>
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
            alt={data.title}
          />
          <div className={styles.text}>
            <h2 className="Modal__header">{data.title}</h2>
            <p className="Modal__desc">{data.overview}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default memo(Modal);
