import { useContext, useRef, useState } from "react";
import search from "./search.svg";
import styles from "./index.module.scss";
import { ThemeContext } from "../../App";


const MainInput = (
  ) => {
  const theme = useContext(ThemeContext);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [isInputVisibile, setInputVisibility] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    inputValue && theme.setSearchQuery(inputValue);
    setInputVisibility(false);
  };

  const onHandleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {!isInputVisibile && (
        <img
          onClick={() => setInputVisibility(!isInputVisibile)}
          className={styles.search}
          src={search}
          alt="search"
        />
      )}
      {isInputVisibile && (
        <form className={styles.MainInput} onSubmit={onHandleSubmit}>
          <input
            className={styles.input}
            ref={inputRef}
            value={inputValue}
            onChange={onHandleInput}
            type="text"
          />
          <button className={styles.button} type="submit">
            🔍︎
          </button>
        </form>
      )}
    </>
  );
};

export default MainInput;
