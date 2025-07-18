const maxStars = 10;
let input;
var stars;

function printStars(count = 1) {
  if (count <= 0) count = 1;

  stars = "";
  for (let i = 0; i < count; i++) {
    stars += "*";
  }
  console.log(stars);
}

while (true) {
  input = prompt("Enter the number of stars (1-10):");

  if (isNaN(input) || input.trim() === "" || input < 1 || input > maxStars) {
    console.log("Invalid input! Enter a number between 1 and 10.");
    continue;
  }

  printStars(Number(input));
  break;
}
