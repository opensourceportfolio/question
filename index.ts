console.log(
  "Simple Map",
  [1, 2, 3].map(x => x * 2), //[2, 4, 6]
  "\nNested Map",
  [1, 2, 3].map(x => [x * 2, x + 1]), //[[2, 2], [4, 3], [6, 4]]
  "\nFlatMap",
  [1, 2, 3].flatMap(x => [x * 2, x + 1]), //[2, 2, 4, 3, 6, 4]
);
