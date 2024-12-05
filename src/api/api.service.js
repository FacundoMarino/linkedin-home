import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_URL_BASE;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchMovies = async (searchTerm, page = 1) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        apikey: API_KEY,
        s: searchTerm,
        page,
      },
    });

    if (response.data.Response === "False") {
      throw new Error(response.data.Error || "No movies found");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    throw new Error(error.message);
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        apikey: API_KEY,
        i: movieId,
      },
    });

    if (response.data.Response === "False") {
      throw new Error(response.data.Error || "Movie not found");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    throw new Error(error.message);
  }
};
