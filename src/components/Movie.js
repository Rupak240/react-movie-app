import React from "react";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) return "green";
  else if (vote >= 6) return "orange";
  else return "red";
};

const Movie = ({ movie: { title, overview, poster_path, vote_average } }) => {
  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMGPATH + poster_path
            : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>

      <div className="movie-overview">
        <h2>Overview: </h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
