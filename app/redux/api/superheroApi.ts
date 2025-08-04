import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const superheroApi = createApi({
  reducerPath: 'superheroApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://akabab.github.io/superhero-api/api' }),
  endpoints: (builder) => ({
    getAllSuperheroes: builder.query({
      query: () => '/all.json',
    }),
  }),
});

export const { useGetAllSuperheroesQuery } = superheroApi;
