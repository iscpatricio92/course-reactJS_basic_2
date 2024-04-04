import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const headers = {
    'X-RapidAPI-Key': '947f168ac6msh31982b36b4f19a7p120e11jsncbf55d6d2a48',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
};

export const moviesApi = createApi({
 reducerPath: 'moviesApi',
 baseQuery: fetchBaseQuery({ baseUrl: 'https://imdb8.p.rapidapi.com' }),
 endpoints: (builder) => ({
  fetchMovies: builder.query({
   query: (title) => ({
    url: `/title/find?q=${title}`,
    method: 'GET',
    headers
   })
  }),
 })
});

export const { useFetchMoviesQuery } = moviesApi;