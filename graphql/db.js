export const movies = [
  {
    id: 0,
    name: "타짜",
    score: 3,
  },
  {
    id: 1,
    name: "아바타",
    score: 5,
  },
  {
    id: 2,
    name: "마더",
    score: 5,
  },
]

export const getById = (id) => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
}
