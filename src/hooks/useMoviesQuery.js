import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/api.service";

export const useMoviesQuery = (searchTerm) => {
  return useInfiniteQuery({
    queryKey: ["movies", searchTerm],
    queryFn: ({ pageParam = 1 }) => fetchMovies(searchTerm, pageParam),
    enabled: !!searchTerm,
    getNextPageParam: (lastPage, pages) => {
      const currentPage = pages.length;
      const totalPages = Math.ceil(parseInt(lastPage.totalResults) / 10);
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
  });
};
