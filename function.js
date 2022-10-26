//함수 호출 방식 + 값으로서의 함수
//1
const myArray = [
  'codeit',
  2017,
  true,
  function(name) {
    console.log('Hi! ${name}');
  },
];

myArray[3]('Codeit');

//2
const printJS = function () {
  console.log('JavaScript');
};

printJS();
//함수를 다른 함수의 파라미터에 전달
function makeQuiz(quiz, answer, success, fail) {
  if (prompt(quiz)===answer) {
    console.log(getSuccess());
  } else {
    console.log(getFail());
  }
};

function getSuccess() {
  return '정답';
};

function getFail() {
  return '오답'
};

const question = '5 + 3 = ?';

makeQuiz(question, '8', getSuccess, getFail);
// getSuccess와 getFail 함수를 callback function이라고 부른다

//함수가 값으로 치부될 수 있는 특성을 이용해 return값에 함수를 할당 할 수 있다
function getPrintHi() {
  return function () {
    console.log('Hi');
  };
};

const sayHi = getPrintHi();
sayHi(); //>>>Hi
//getPrint와 같은 함수를 고차 함수라고 한다 (getPrintHi()();를 입력하면 Hi를 바로 출력 할 수 있다.)

//생각해보기 :차이점 설명해보기
//1
function getFunction() {
  return function () {
    console.log('Codeit');
  }
}

const prinTCodeit = getFunction;
prinTCodeit();

//2
function getFunction() {
  return function () {
    console.log('Codeit');
  }
}

const printCodeit = getFunction();
printCodeit();

//parameter

function defaultTest(x, y = x +3) {
  console.log(`x:${x}`);
  console.log(`y:${y}`);
};

defaultTest(2); //>>> x:2 y:5
defaultTest(2,4); //>> x:3 y:4

//arguments 
//함수내에서 arguemnts라는 유사배열(객체)를 사용할 수 있다.
function printArguments(a, b, c) {
  for (const arg of arguments) {
    console.log(arg);
  };
};

printArguments('young', 'mark', 'arguemnts');
//printArguments라는 함수의 arguments는 ['young', 'mark', 'arguments']


//Rest Parameter 

function printRank(first, second, ...others) {
  console.log('코드잇 레이스 최종 결과');
  console.log(`우승:${first}`);
  console.log(`준우승:${second}`);
  for (const arg of others) {
    console.log(`참가자 ${arg}`);
  }
}

printRank('1', '2', '3', '4', '5');
//>>>...others는 rest parameter이고 사용되지 않았던 argument를 담는 유사배열이 아닌 찐 배열이다


//Arrow Function
//arguments객체를 가지고 있지 않음 단 rest parameter사용은 가능

const getTwice = function(number) {
  return number *2;
};

console.log(getTwice(5));

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function(){
  console.log('button is clicked');
});
//----------------------------------------------
const getTwwice = number => { //parameter가 한개일 때는 ()를 감싸주지 않아도 상관 없음)
  return number *3;
};
console.log(getTwice(3));
//---------------------------------------------
//function getTwiice = number => number * 4;//단 함수에 return문만 있을때 사용 가능


//---------------------------------------------
const sum = (a,b) => { //parameter가 2개 이상이라면 무조건 ()를 써줘야 한다
  return a+b;
};

//----------------------------------------------
const getCodeit = () => ({name:'Codeit'}) //return값이 객체라면
//---------------------------------------------
myBtn.addEventListener('click', () => {
  console.log('button is clicked!');
});

//this

const user = {
  firstName:'Tess',
  lastName: 'Jang',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
//--------------------------------------------------
function printThis() {
  console.log(this);
};

const myObj = {
  content:'myObj',
  printThis:printThis,
};

//함수를 호출하기 위한 

console.log(this);

const printThis = () => {
  console.log(this);
};
//이 이후에 메소드로 쓰이는 객체는 printThis함수를 호출 할때 window객체를 출력한다
//따라서 객체에 메소드를 만들때는 arrow보다는 일반함수를 더욱 선호한다.