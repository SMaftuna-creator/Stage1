let animal = {
  eats: true,
  food() {
    console.log("Feed with milk");
  }
};

let cat = {
  runs: true,
  __proto__: animal
};

cat.food()