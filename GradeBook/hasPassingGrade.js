import { getGrade } from "./getGrade.js";

function hasPassingGrade(score) {
  let grade = getGrade(score);
  if (grade === 'F') {
    return false;
  } else {
    return true;
  }
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));