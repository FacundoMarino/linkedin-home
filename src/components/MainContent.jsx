import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../api/api.service";

const MainContent = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMovies = async (pageNumber = 1) => {
    try {
      const data = await fetchMovies(searchQuery, pageNumber);
      setMovies((prevMovies) => [...prevMovies, ...data.Search]);
      setHasMore(pageNumber * 10 < parseInt(data.totalResults));
    } catch (err) {
      setError("Movie not Found!");
    }
  };

  useEffect(() => {
    setMovies([]);
    setError("");
    setPage(1);
    if (searchQuery) {
      loadMovies(1);
    }
  }, [searchQuery]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadMovies(nextPage);
  };

  return (
    <main className="flex-1 p-4">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
          {hasMore && (
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={loadMore}
            >
              Load More
            </button>
          )}
        </>
      )}
    </main>
  );
};

export default MainContent;
