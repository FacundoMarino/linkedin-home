import React from "react";
import MovieCard from "./MovieCard";
import { useMoviesQuery } from "../hooks/useMoviesQuery";

const MainContent = ({ searchQuery }) => {
  const {
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useMoviesQuery(searchQuery);

  return (
    <main className="flex-1 p-4">
      {error ? (
        <p className="text-red-500">Movie not Found!</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data?.pages
              .flatMap((page) => page.Search)
              .map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
          </div>
          {isFetching && <p className="text-gray-500">Loading...</p>}
          {hasNextPage && (
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? "Loading More..." : "Load More"}
            </button>
          )}
        </>
      )}
    </main>
  );
};

export default MainContent;
