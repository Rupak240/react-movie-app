import React, { useState, useEffect, Fragment } from "react";
import Movie from "./components/Movie";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(APIURL);
  }, []);

  const getMovies = async (url) => {
    const response = await fetch(url);
    const resMovies = await response.json();

    setMovies(resMovies.results);
    console.log(resMovies.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);
    }

    setSearchTerm("");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Fragment>
      <header>
        <div className="header-container">
          <h2>MOVIESINFO</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="search"
              placeholder="Search..."
              className="search"
              autoComplete="off"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>
        </div>
      </header>{" "}
      <div className="container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie movie={movie} key={movie.id} />)}
      </div>
    </Fragment>
  );
};

export default App;
