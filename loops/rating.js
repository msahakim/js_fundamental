const movie = {
  title: "Shrek 4",
  duration: "1H 30M",
  category: "Animation, Comedy",
  rating: 4
};

// for-loop
let stars = "";

for (let w = 0; w < movie.rating; w++) {
    stars += " * ";
}

console.log(stars);
