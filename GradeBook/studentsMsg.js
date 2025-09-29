import { getGrade } from "./getGrade.js";
import { getAverage } from "./getAvarage.js";

function studentMsg(totalScores, studentScore) {
    let avarage = getAverage(totalScores);
    let grade = getGrade(studentScore);
    if (grade === 'F') {
        return `Class average: ${avarage}. Your grade: ${grade}. You failed the course.`
    } else {
        return `Class average: ${avarage}. Your grade: ${grade}. You passed the course.`
        }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));