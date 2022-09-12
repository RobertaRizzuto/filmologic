import styles from "./index.module.scss";

import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import TopRated from "../TopRated/TopRated";
import Popular from "../Popular/Popular";
import Upcoming from "../Upcoming/Upcoming";
import TopRatedFilteredList from "../TopRatedFilteredList/TopRatedFilteredList";
import Counter from "../Counter/Counter";


const Discover = ({ setModalVisibility, isModalVisibile, setModalData }) => {
  const [movieLists, setMovieLists] = useState({});
  const [filteredList, setFilteredList] = useState([]);
  const [visibleSection, setVisibleSection] = useState("topRated");
  const [value, setValue] = useState(8.5);

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, []);

  useEffect(
    () =>
      movieLists.topRated &&
      setFilteredList(
        movieLists.topRated.filter((el) => el.vote_average >= value)
      ),
    [movieLists, value]
  );


  return (
    <div className={styles.Discover}>
      <ul className={styles.ul}>
        <button
          onClick={() => setVisibleSection("topRated")}
          style={
            visibleSection === "topRated"
              ? { borderBottom: "4px solid #ac4579", color: "white"}
              : { borderBottom: "none" }
          }
          className={styles.btn}
        >
          Top Rated
        </button>
        <button
          onClick={() => setVisibleSection("popular")}
          style={
            visibleSection === "popular"
              ? { borderBottom: "4px solid #ac4579" , color: "white"}
              : { borderBottom: "none" }
          }
          className={styles.btn}
        >
          Popular
        </button>
        <button
          onClick={() => setVisibleSection("upcoming")}
          style={
            visibleSection === "upcoming"
              ? { borderBottom: "4px solid #ac4579", color: "white" }
              : { borderBottom: "none" }
          }
          className={styles.btn}
        >
          Upcoming
        </button>
      </ul>
      {visibleSection === "topRated" && (
        <TopRated
          data={movieLists.topRated}
          setModalVisibility={setModalVisibility}
          isModalVisibile={isModalVisibile}
          setModalData={setModalData}
        />
      )}
      {visibleSection === "popular" && (
        <Popular
          data={movieLists.popular}
          setModalVisibility={setModalVisibility}
          isModalVisibile={isModalVisibile}
          setModalData={setModalData}
        />
      )}
      {visibleSection === "upcoming" && (
        <Upcoming
          data={movieLists.upcoming}
          setModalVisibility={setModalVisibility}
          isModalVisibile={isModalVisibile}
          setModalData={setModalData}
        />
      )}
  <hr />
  {movieLists.topRated && (
        <TopRatedFilteredList
          data={filteredList}
          setModalVisibility={setModalVisibility}
          isModalVisibile={isModalVisibile}
          setModalData={setModalData}
        >
          <Counter
            increase={() => setValue((prev) => prev + 0.1)}
            decrease={() => setValue((prev) => prev - 0.1)}
            value={value}
          />
        </TopRatedFilteredList>
      )}
        <hr />
    </div>
     
    
  );
};
export default Discover;
