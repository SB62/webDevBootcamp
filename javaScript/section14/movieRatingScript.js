let movies = [
  {
    name: "Knives Out",
    rating: 9,
    seen: true,
  },
  {
    name: "Hunters",
    rating: 7,
    seen: true,
  },
  {
    name: "Murder on the Orient Express",
    rating: 6,
    seen: false,
  },
  {
    name: "Arkansas",
    rating: 5,
    seen: false,
  },
  {
    name: "The Big Lebowski",
    rating: 10,
    seen: true,
  },
];

for (i = 0; i < movies.length; i++) {
  if (movies[i].seen === true) {
    console.log(
      "You have watched " +
        '"' +
        movies[i].name +
        '" - ' +
        movies[i].rating +
        " stars"
    );
  } else
    console.log(
      "You have not seen " +
        '"' +
        movies[i].name +
        '" - ' +
        movies[i].rating +
        " stars"
    );
}
// forEach loop method and using a string built for each title.
function buildString(movie) {
  let result = "You have ";
  if (movie.seen === true) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += '"' + movie.name + '" - ';
  result += movie.rating + " stars";
  // return the string
  return result;
}

movies.forEach((movie) => {
  console.log(buildString(movie));
});
