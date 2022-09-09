
import { useState } from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import MainInput from './components/MainInput';
import MovieEntity from './components/MovieEntity';
import Modal from './components/Modal';

function App() {
  const [movieID, setMovieId] = useState("550");
  const [isModalVisibile, setModalVisibility] = useState(false);
  const [modalData, setModalData] = useState();
  const [movieData, setMovieData] = useState({});

  return (
    <div className={styles.App}>
      <Header> <MainInput setMovieId={setMovieId} movieID={movieID}/></Header>
     <MovieEntity movieID={movieID} movieData={movieData} setMovieData={setMovieData} setModalData={setModalData} setModalVisibility={setModalVisibility} isModalVisibile={isModalVisibile}/>
      {isModalVisibile &&  <Modal
          data={modalData}
          isVisibile={isModalVisibile}
          onModalClick={setModalVisibility}
        /> }
    </div>
  );
}

export default App;
