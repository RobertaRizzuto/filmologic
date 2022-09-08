
import { useState } from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import MainInput from './components/MainInput';
import MovieEntity from './components/MovieEntity';

function App() {
  const [movieID, setMovieId] = useState("550");

  return (
    <div className={styles.App}>
      <Header> <MainInput setMovieId={setMovieId} movieID={movieID}/></Header>
     <MovieEntity movieID={movieID}/>
      
    </div>
  );
}

export default App;
