function gradeToLetter(grade) {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80) {
    return 'B';
  } else if (grade >= 70) {
    return 'C';
  } else if (grade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

//Input
var numericGrade = 65;

//Output
var letterGrade = gradeToLetter(numericGrade);
console.log(`The letter grade is: ${letterGrade}`);
