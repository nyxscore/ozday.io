// 변수 선언
var movie = "SquidGame";
let age = 30;
const A = true;

// 문자열 처리
let intro = "마지막으로 본 영화는\n\t" + movie + " 입니다";
console.log(intro);

// 배열 리터럴
let hobbies = ["게임", "노래", "공부"];
console.log("내 취미는 " + hobbies.join(", "));

// 객체 리터럴
let GD = {
  name: "권지용",
  age: 38,
  Artist: true,
  Actor: false,
};

console.log("이 사람은 " + GD.name + "입니다");
console.log("나이는 " + GD.age + "이구요");
console.log("아티스트일까요? " + GD.Artist);
console.log("배우일까요? " + GD.Actor);

// typeof
console.log(typeof GD);
console.log(typeof movie);
