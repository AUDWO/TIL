//Spread (배)
const web = ['html', 'css'];

const interact = [...web];

interact.push('Javascript');

console.log(interact); //>>> ['html', 'css', 'Javascript']
console.log(web); //>>> ['html', 'css']

const introduce = (name, birth, job) => {
	console.log(`저는 ${name}입니다`);
	console.log(`${birth}년 생이고`);
	console.log(`직업은 ${job}입니다.`);
};

const myArr = ['코드잇', 2017, '프로그래밍 강사'];

introduce(...myArr);

//--------------------
const members = ['태호', '종훈', '우재'];

const newObject = {...members};

console.log(newObject);// {0:태훈, 1:종훈, 2:우재} 

//spread 객체
const codeit = {
	name: 'codeit',
  };

const codeitClone = {
	...codeit,
}

//codeit == codeitClone
//객체 spread는 배열spread와 달리 함수의 argument로 사용할 수 없다.

//연습문제

function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

// 1. Spread 구문을 활용해서 sancks와 drinks 배열을 각각 mySnacks와 myDrinks 변수에 복사해 주세요.
const mySnacks = [...snacks];
const myDrinks = [...drinks];

mySnacks.splice(2, 3);
myDrinks.splice(1);

// 2. Spread 구문을 활용해서 mySnacks와 myDrinks 순서로 두 배열을 합쳐서 myChoice 변수에 할당해 주세요.
const myChoice = [...mySnacks,...myDrinks];

// 3. Spread 구문을 활용해서 myChoice의 각 요소들을 printArguments 함수의 아규먼트로 전달해 주세요.

printArguments(...myChoice);