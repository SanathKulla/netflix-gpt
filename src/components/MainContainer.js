import React from "react";
import MainMovieTitle from "./MainMovieTitle";
import MainMovieTrailer from "./MainMovieTrailer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <MainMovieTitle title={original_title} overview={overview} />
      <MainMovieTrailer movieId={id} />
    </div>
  );
};

export default MainContainer;
