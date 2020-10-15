import axios from 'axios';

const BASE_URL = 'https://yts.am/api/v2/';
const MOVIES_LIST_URL = `${BASE_URL}/list_movies.json`;
const MOVIES_DETAIL_URL = `${BASE_URL}/movie_details.json`;

export const getMovies = async (limit, rating) => {
  const { data: { data: { movies } } } = await axios(MOVIES_LIST_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
}

export const getMovie = async (id) => {
  const { data: { data: { movie } } } = await axios(MOVIES_DETAIL_URL, {
    params: {
      movie_id: id,
    }
  });
  return movie;
}
