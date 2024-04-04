import { createAction } from "@reduxjs/toolkit";

// importar actions para efectos demostrativos
import {
  startFetchMovieRatings as startFetchMovieRatingsSlice,
  successFetchMovieRatings as successFetchMovieRatingsSlice,
  errorFetchMovieRatings as errorFetchMovieRatingsSlice,
  startFetchMovieDetail as startFetchMovieDetailSlice,
  successFetchMovieDetail as successFetchMovieDetailSlice,
  errorFetchMovieDetail as errorFetchMovieDetailSlice,
} from "../slices/movies";
// importar actions para efectos demostrativos
const BASE_URL = "https://imdb8.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": "947f168ac6msh31982b36b4f19a7p120e11jsncbf55d6d2a48",
  "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
};

export const startFetchMovieRatings = createAction("START_FETCH_MOVIE_RATINGS");
export const successFetchMovieRatings = createAction(
  "SUCCESS_FETCH_MOVIE_RATINGS"
);
export const errorFetchMovieRatings = createAction("ERROR_FETCH_MOVIE_RATINGS");
export const startFetchMovieDetail = createAction("START_FETCH_MOVIE_DETAIL");
export const successFetchMovieDetail = createAction(
  "SUCCESS_FETCH_MOVIE_DETAIL"
);
export const errorFetchMovieDetail = createAction("ERROR_FETCH_MOVIE_DETAIL");

export const fetchMovieRatings = (movieId) => async (dispatch) => {
  try {
    //dispatch(startFetchMovieRatings());
    dispatch(startFetchMovieRatingsSlice());
    const url = `${BASE_URL}/title/v2/get-ratings?tconst=${movieId}`;
    const response = await fetch(url, { headers });
    const data = await response.json();
    //dispatch(successFetchMovieRatings({ data }));
    dispatch(successFetchMovieRatingsSlice(data));
  } catch (error) {
    //dispatch(errorFetchMovieRatings({ error }));
    dispatch(errorFetchMovieRatingsSlice({error}));
  }
};

export const fetchMovieDetail = (movieId) => async (dispatch) => {
  try {
    //dispatch(startFetchMovieDetail());
    dispatch(startFetchMovieDetailSlice());

    const overviewDetailsUrl = `${BASE_URL}/title/v2/get-overview?tconst=${movieId}`;
    const overviewDetailsResponse = await fetch(overviewDetailsUrl, {
      headers,
    });
    const overviewDetailsData = await overviewDetailsResponse.json();

    const topCastUrl = `${BASE_URL}/title/v2/get-top-cast-and-crew?tconst=${movieId}`;
    const topCastResponse = await fetch(topCastUrl, { headers });
    const topCastData = await topCastResponse.json();

    const getDetailsUrl = `${BASE_URL}/title/v2/get-details?tconst=${movieId}`;
    const getDetailsResponse = await fetch(getDetailsUrl, { headers });
    const getDetailstData = await getDetailsResponse.json();

    const getGenresUrl = `${BASE_URL}/title/v2/get-genres?tconst=${movieId}`;
    const getGenresResponse = await fetch(getGenresUrl, { headers });
    const getGenresData = await getGenresResponse.json();

    dispatch(
      successFetchMovieDetailSlice({
        overview: overviewDetailsData,
        topCast: topCastData,
        details: getDetailstData,
        genres: getGenresData,
      })
    );
    /*dispatch(
      successFetchMovieDetail({
        overview: overviewDetailsData,
        topCast: topCastData,
        details: getDetailstData,
        genres: getGenresData,
      })
    );*/
  } catch (error) {
    //dispatch(errorFetchMovieDetail({ error }));
    dispatch(errorFetchMovieDetailSlice({error}));
  }
};
