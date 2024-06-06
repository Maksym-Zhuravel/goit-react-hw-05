import axios from "axios";

const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWZlNDM1NWMwMDA1YWViOWRjYjMzMTgwOWQyYmQ5NSIsInN1YiI6IjY2NThjNDYxNTE3MjViMzUxYjkzZjFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0KLGgBqYNbUJRn3PnUQZjpmlzVHrxWNBEiG5wgvDUAg";
axios.defaults.baseURL = "https://api.themoviedb.org";

export const trendingMovies = async () => {
  const response = await axios.get("/3/trending/movie/day", {
    headers: { Authorization: `Bearer ${ACCESS_KEY}` },
  });

  return response.data.results;
};

export const detailMovie = async (id) => {
  const response = await axios.get(`/3/movie/${id}`, {
    headers: { Authorization: `Bearer ${ACCESS_KEY}` },
  });

  return response.data;
};

export const reviewMovie = async (id) => {
  const response = await axios.get(`/3/movie/${id}/reviews`, {
    headers: { Authorization: `Bearer ${ACCESS_KEY}` },
  });

  return response.data.results;
};

export const castMovie = async (id) => {
  const response = await axios.get(`/3/movie/${id}/credits`, {
    headers: { Authorization: `Bearer ${ACCESS_KEY}` },
  });

  return response.data.cast;
};

export const searchMovie = async (topic, page) => {
  const response = await axios.get("/3/search/movie", {
    params: {
      query: topic,
      page: page,
    },
    headers: { Authorization: `Bearer ${ACCESS_KEY}` },
  });

  return response.data.results;
};
