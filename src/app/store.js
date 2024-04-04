import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../redux/api/movies";
import MoviesReducer from "../redux/reducers/movies";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    MoviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
