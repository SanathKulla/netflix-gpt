import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    mainMovieTrailer: null,
  },
  reducers: {
    addNowPalyingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMainMovieTrailer: (state, action) => {
      state.mainMovieTrailer = action.payload;
    },
  },
});

export default moviesSlice.reducer;

export const { addNowPalyingMovies, addMainMovieTrailer } = moviesSlice.actions;
