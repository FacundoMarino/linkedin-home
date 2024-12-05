import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/api.service";

export const useMoviesQuery = (searchTerm) => {
  return useQuery(["movies", searchTerm], () => fetchMovies(searchTerm), {
    enabled: !!searchTerm,
  });
};
