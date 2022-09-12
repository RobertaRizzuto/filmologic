import { useState, useCallback,useEffect } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import MainInput from "./components/MainInput";
import MovieEntity from "./components/MovieEntity";
import Modal from "./components/Modal";
import Discover from "./components/Discover";
import Footer from "./components/Footer";


function App() {
  const [movieID, setMovieId] = useState("550");
  const [isModalVisibile, setModalVisibility] = useState(false);
  const [modalData, setModalData] = useState();
  const [movieData, setMovieData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");




  const randomFilm = useCallback(() => {
    setMovieId(Math.floor(Math.random() * 10) * 100);
   
  }, [movieID]);



  return (
    <div className={styles.App}>
      <Header>
        <MainInput setSearchQuery={setSearchQuery} />
      </Header>
      <MovieEntity
        movieID={movieID}
        setMovieId={setMovieId}
        movieData={movieData}
        setMovieData={setMovieData}
        setModalData={setModalData}
        setModalVisibility={setModalVisibility}
        isModalVisibile={isModalVisibile}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {isModalVisibile && (
        <Modal
          data={modalData}
          isVisibile={isModalVisibile}
          onModalClick={setModalVisibility}
        />
      )}

      <button onClick={randomFilm} className={styles.btn}>
        Let's get random!
      </button>

      <hr className={styles.hr} />
      <Discover id="discover"
        setModalVisibility={setModalVisibility}
        isModalVisibile={isModalVisibile}
        setModalData={setModalData}
      />
      <Footer/>
    </div>
  );
}

export default App;
