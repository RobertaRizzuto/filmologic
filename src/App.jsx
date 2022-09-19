import { useState, useCallback, useEffect, createContext, useRef } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import MainInput from "./components/MainInput";
import MovieEntity from "./components/MovieEntity";
import Modal from "./components/Modal";
import Discover from "./components/Discover";
import Footer from "./components/Footer";


export const ThemeContext = createContext();

function App() {
  const [movieID, setMovieId] = useState("550");
  const [isModalVisibile, setModalVisibility] = useState(false);
  const [modalData, setModalData] = useState();
  const [movieData, setMovieData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const topRef = useRef(null);
  const discoverRef = useRef(null);
  const filterRef = useRef(null);

  const randomFilm = useCallback(() => {
    setMovieId(Math.floor(Math.random() * 10) * 100);
  }, [movieID]);
  const AppVariables = {
    movieID,
    setMovieId,
    movieData,
    setMovieData,
    modalData,
    setModalData,
    isModalVisibile,
    setModalVisibility,
    searchQuery,
    setSearchQuery,
    topRef,
    discoverRef,
    filterRef
  };

  return (
    <div className={styles.App}>
      <ThemeContext.Provider value={AppVariables}>
        <Header>
          <MainInput setSearchQuery={setSearchQuery} />
        </Header>
        <MovieEntity />
        {isModalVisibile && <Modal />}

        <button onClick={randomFilm} className={styles.btn}>
          Let's get random!
        </button>

        <hr className={styles.hr} />
        <Discover />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
