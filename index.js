//AND와 OR의 연산 방식 
//.

function print(value) {
  const message = value || 'Codeit';

  console.log(message);
}

print();
print(Javascript);

//AND OR 연산자 우선순위
console.log(true || false && false); // >>>true


//NULL병합 연산자
const example1 = null ?? 'I'; // I
const example2 = undefined ?? 'love'; // love
const example3 = 'Codeit' ?? 'JavaScript'; // Codeit


//block scope의 예시
const sum = 0;

function getSum(x, y) {
  const sum = x + y;

  return sum;
}

if (getSum(1, 5) > 3) {
  const sum = 4 + 6; 
}
 
console.log(sum);

//함수를 만드는 방법 2가지//

//1.함수 선언
function liver() {
  console.log('championship liverpool')
}

//2.함수 표현식
const func = function () {
  console.log('Hi');
};

func();

//함수 표현식2(key point:함수 선언을 값처럼 활용하기 때문에)
const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click',function() {
  console.log('Hi');
});

//함수 선언과 함수 표현식의 차이
//1.함수선언은 함수호철 후 함수선언 가능(호이스팅)
//2.함수선언은 함수스코프를 가진다(함수선언 특)
function mim( ) {
  let scp = 123;
}
console.log(scp) //>>>123
//3.함수 표현식은 변수스코프를 가진다(함수 표현식 특)

//고민해보기
///노란색 {}은 블록스코프

{
  function sayHi() {
    console.log('Hi!');
  }
}

sayHi(); //>>>Hi!

{
  let sayHi = function () {
    console.log('Hi!');
  };
}

sayHi(); //>>>error

// 기명함수 표현식 사용의 예시


let counttdown = function(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    counttdown(n - 1);
  }
};

let myFfunction = countdown;

countdown = null;

myFfunction(5); // TypeError

let countdown = function printCountdown(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    printCountdown(n - 1);
  }
};

let myFunction = countdown;

countdown = null;

myFunction(5); // 정상적으로 동작

//즉시 실행 함수
//(1)
(function () {
  console.log('Hi!');
})();
//(2)
(function (x, y) {
  consoel.log(x + y);
})(3, 5);