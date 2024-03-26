import { useEffect } from "react";
import { apiOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMainMovieTrailer } from "../utils/moviesSlice";

const useMainMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchMainMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      apiOptions
    );
    const json = await data.json();
    const filteredResult = json.results.filter(
      (info) => info.type === "Trailer"
    );
    const trailer =
      filteredResult.length === 0 ? json?.result[0] : filteredResult[0];
    dispatch(addMainMovieTrailer(trailer?.key));
  };

  useEffect(() => {
    fetchMainMovieTrailer();
  }, []);
};

export default useMainMovieTrailer;
