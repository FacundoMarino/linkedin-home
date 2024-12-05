import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <img
        src={movie.Poster}
        alt={movie.title}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h3 className="font-bold text-lg">{movie.Title}</h3>
      <p className="text-gray-600">{movie.Year}</p>
      <p className="text-gray-600">{movie.Type}</p>
    </div>
  );
};

export default MovieCard;
