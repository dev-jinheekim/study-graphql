export const people = [
  {
    id: 0,
    name: "Jin",
    age: 34,
    gender: 'female',
  },
  {
    id: 1,
    name: "K",
    age: 34,
    gender: 'female',
  },
  {
    id: 2,
    name: "O",
    age: 35,
    gender: 'male',
  },
]

export const getById = (id) => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
}
