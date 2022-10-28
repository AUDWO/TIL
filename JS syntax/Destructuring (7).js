// 구조 분해 (Destructuring) 배열

const rank = ['유나', '효준', '민환', '재하'];

const [macbook, ipad, airpods, cupon] = rank;

console.log(macbook);
console.log(ipad);
console.log(airpods);
console.log(coupon);
// 각 rank배열이 각 값들의 들어간다 각 값들을 따로 선언해서 
//저장하는 번거러움을 없애준다

const rank = ['유나', '효준', '민환', '재하', '민재'];

const [macbook, ipad, airpods,...cupon] = rank;

console.log(coupon) //>>> 배열로 나머지 값들을 모두 출력

//-------------------------------------------

//변수에 할당 된 값을 교환 할때도 사용가능

let macbook = '효준';

let ipad = '유나';

console.log('Macbook 당첨자:'macbook);
console.log('ipad 당첨자:'ipad);

[macbook, ipad] = [ipad, macbook];


console.log('Macbook 당첨자:'macbook);
console.log('ipad 당첨자:'ipad); //>>서로 바뀌어 있음

//-----------------------------------------------
//b는 undefined값을 가지고 있기 때문에 기본값 4를 받을 수 있지만 그 외에 null값을
//c는 가지고 있기 때문에 기본값을 받지 못하고 null값을 사용하게 된다.
//참고로 값이 존재 하지 않는데 기본값을 줄 경우 그때도 기본값을 받을 수 있다.
const numbers = [5, undefined, null, 3, 1, 7, 0];
const [a, b = 4, c = 2, ...d] = numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(d[2]);
console.log(d[4])


// 구조 분해 (Destructuring) 객체

const macbook = {
	title: '맥북 프로 16형',
	price: 3690000,
	memory:'16GB',
};

//const title = macbook.title; 이런식으로 접근하기 때문에 번거로움

const {title,price} = macbook; //객체 내 있는 propertyname으로 변수를 할당 하면 됨
//단 객체 내 존재하지 않는 propertyname으로 변수를 설정하면
//undefined값이 뜸

const {title,..rest} = macbook;

console.log(title);
console.log(rest); //나머지 값들을 객체형태로 보여

//----------------------------------------------

//만약 title의 value를 title변수가 아닌 다른 변수에 저장하고 싶을때

const {title:product,...rest} = macbook; 

//----------------------------------------------

//propertyname을 변수의 이름으로 사용하지 못 할때
const macbook = {
	title: '맥북 프로 16형',
	price: 3690000,
	memory:'16GB',
	'serial-num':'adad'
};

const {'serial-num':serialNum} = macbook;

//--------------------------------------------

const menu1 = { name: '아메리카노' };
const menu2 = { name: '바닐라 라떼', ice: true };
const menu3 = { name: '카페 모카', ice: false };

function printMenu(menu) {
    //ice값을 가지고 있으면 원래 값을 가져오고 없을 경우 true값을 가진다
	const {name, ice='true'} = { ...menu };

    //삼항 연산자에서 조건 부분을 ice처럼 변수만 써주면 변수가 있냐 없냐가 조건이 된다.
	console.log(`주문하신 메뉴는 '${ice ? '아이스' : '따뜻한'} ${name}'입니다.`);

}


// 구조 분해 (Destructuring) 함수

function getArray() {
	return ['컴퓨터', '냉장고', '세탁기'];
}

const [el1, el2, el3] = getArray

console.log()

//--------------------------------------
//1.
function print(...arg) {
	const [macbook,ipad, airpods, ...coupon] = arg;

	console.log(`맥북의 주인공은 ${macbook} 님 입니다.`);
	console.log(`아이패드의 주인공은 ${ipad} 님 입니다.`);
	console.log(`에어팟의 주인공은 ${airpods} 님 입니다.`);
	console.log('코드잇 3개월 수강권 주인공은');
	for (let user of coupen) {
		console.log(`${user}님`);
	}

	console.log(`이상 총 ${coupon.length}명 입니다.`);

}

print('형빈','승주','원석','시준','성광','명해');

//2.
//파라미터에 구조분해법을 실행 
function print([macbook,ipad, airpods, ...coupon]) {

	console.log(`맥북의 주인공은 ${macbook} 님 입니다.`);
	console.log(`아이패드의 주인공은 ${ipad} 님 입니다.`);
	console.log(`에어팟의 주인공은 ${airpods} 님 입니다.`);
	console.log('코드잇 3개월 수강권 주인공은');
	for (let user of coupen) {
		console.log(`${user}님`);
	}

	console.log(`이상 총 ${coupon.length}명 입니다.`);

}
const ['형빈','승주','원석','시준','성광','명해'] = ranks;

print(ranks);

//---------------------------------------

const macbook = {
	title: '맥북 프로 16형',
	price: 3690000,
	color: 'silver',
	memory: '16gb',
}

function print2({title, color, price}) {
	console.log(`선택한 상품은 ${title}입니다.`);
	console.log(`색상은 ${color}이며.`);
	console.log(`가격은 ${price}원 입니다.`);
}

//arguments에 의해 {title,color,price} = macbook이 
print(macbook);

//---------------------------------------

const btn - document.querySelector('#btn');

btn.addEventListner('click', (event) => {
	event.target.classList.toggle('checked');
});

const btn - document.querySelector('#btn');

btn.addEventListner('click', ({target}) => {
	e.target.classList.toggle('checked');
});

//----------------------------------------

function printFavoritSong(name, music) {
  const { singer, title } = music;
  console.log(`최근 '${name}'님이 즐겨듣는 노래는 '${singer}'의 '${title}'이라는 노래입니다.`);
}
//==
function printFavoritSong(name, { title, singer }) {
  console.log(`최근 '${name}'님이 즐겨듣는 노래는 '${singer}'의 '${title}'이라는 노래입니다.`);
}