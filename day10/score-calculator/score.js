// 상수 선언
const maxScore = 100; // 최대 점수

// 입력 받기
let input = prompt("점수를 입력하세요 (0~100 사이의 숫자).");
let score = Number(input); // 입력 값을 숫자로 변환

// 보너스 점수 추가 (복합 대입 연산자 사용)
score += 5;

// 최종 점수는 최대 105점까지만 허용
let finalScore = score > 105 ? 105 : score;

// 등급 변수 (var 사용)
var grade;

// 등급 결정 (if, else if, else 사용, 이항/논리/비교 연산자 포함)
if (finalScore >= 100) {
  grade = "S";
} else if (finalScore >= 90) {
  grade = "A";
} else if (finalScore >= 80) {
  grade = "B";
} else if (finalScore >= 70) {
  grade = "C";
} else if (finalScore >= 60) {
  grade = "D";
} else {
  grade = "F";
}

// 합격/불합격 판별 (삼항 연산자 사용)
let status = finalScore >= 60 ? "Pass" : "Fail";

// 등급별 메시지 출력 (switch 사용)
let message;
switch (grade) {
  case "S":
    message = "Super!!";
    break;
  case "A":
    message = "Excellent work!";
    break;
  case "B":
    message = "Good job!";
    break;
  case "C":
    message = "Satisfactory performance.";
    break;
  case "D":
    message = "Needs improvement.";
    break;
  case "F":
    message = "Please try harder!";
    break;
  default:
    message = "Invalid grade.";
}

// 출력 (콘솔)
console.log("Final Score: " + finalScore);
console.log("Grade: " + grade);
console.log("Status: " + status);
console.log("Message: " + message);
