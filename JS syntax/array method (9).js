//forEach
//단순히 배열의 반복 작업이 필요할때
//return필수 아님
//변수에 할당하면  undefined값을 가


const members = ['영훈','윤수','동욱','태호'];
 

function (arrays) {
	for (let args of arrays) {
	console.log(`${args}입니다`)
	}
};

//----------------------------------------

const firstNames = ['영훈','윤수','동욱','태호'];
const lastNames = ['강','이','손','성'];

//다른 배열과 함께 활용할때 쓰면 좋

firstNames.forEach((firstName, index)  => {
	console.log(`${lastNames[i]}${firstName}님이 입장하셨습니다`)
});//>>>강영훈님이 입장하셨습니다 이윤수님이 입장하셨습니다 손동욱님이 입장하셨습니다

//배열이 변수에 지정되어있다면 굳이 쓸 필요 없지만 
//만약 배열이 밑에와 같이 이름이 없다면 arr을 통해 배열을 불러 낼 수 있다.
['영훈','윤수','동욱','태호'].forEach((fisrtName,i,arr) {
	console.log(arr);
})//바로 실행 됨


//map
//fullNames라는 새로운 배열을 만들어낸다.
//반복 작업을 통해서 새로 배열이 필요한 경우
//return이 필수 (값임)
const firstNames = ['영훈','윤수','동욱','태호'];
const lastNames = ['강','이','손','성'];

const fullNames = firstNames.map((firstName,i) => {
	//return값을 새로운 배열의 원소로 추가
	return lastName[i] + firstName;
//const fullNames = firstNames.map((firstName,i) => lastNames[i] + firstName) ;
});


console.log(fullNames);

//filter
//어떤 조건에 따 필터링 새로운 배열을 얻고자 할때
//콜백함수의 return문이 true또는 false로 평가되는 조건식이어야 한 


const devices = [
{name:'ipad' , brand:'apple'},
{name:'GalaxyNote', brand:'samsung'},
{name:'Gram'. brand:'LG'},
];

//filter:조건식을 만족시키는 값들을 모아 배열로 만든다.
const apples = devices.filter((el)=>el.brand === 'apple');

//find:조건식을 만족시키는 값 .
const lg = devices.find((el)=>el.name === 'LG');



const numers = [1,2,3,4,5];


//return값으로 true나 false가 나
//some:조건을 만족하는 요소가 1개 이상 있는지

const someReturn = numbers.some((el,i)=>{
	console.log('some',i);
	return el>5;
})

console.log(someReturn)
//every: 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((el,i)=>{
	console.log('every:',i);
	return el >5;
})