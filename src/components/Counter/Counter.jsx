
import styles from "./index.module.scss";

const Counter = ({ increase, decrease, value }) => {


  return (
    <div className={styles.counter}>
      
      <button className={styles.decrease_btn} onClick={decrease}>
        -
      </button>
      <p>{value.toFixed(1)}</p>
      <button className={styles.increase_btn} onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Counter;
