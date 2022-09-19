import styles from "./index.module.scss";
import { memo, useContext } from "react";
import { ThemeContext } from "../../App";
const Modal = () => {
  const theme = useContext(ThemeContext);
  return (
    theme.isModalVisibile && (
      <div
        className={styles.modal}
        onClick={() => theme.setModalVisibility(false)}
      >
        <div className={styles.main}>
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/w342${theme.modalData.poster_path}`}
            alt={theme.modalData.title}
          />
          <div className={styles.text}>
            <h2 className="Modal__header">{theme.modalData.title}</h2>
            <p className="Modal__desc">{theme.modalData.overview}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default memo(Modal);
