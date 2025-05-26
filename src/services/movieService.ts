import axios from "axios";
import type { Movie } from "../types/movie";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export default async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: { query },
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    }
  );

  return response.data.results as Movie[];
}
