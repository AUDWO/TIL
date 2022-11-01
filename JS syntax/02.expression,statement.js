//표현식
5;
true && null;

//const title = 'Javascript'
//const codeit = {
//  name:'Codeit'
//};
//const number = [1, 2, 3];
 
codeit.name
typeof codeit
number[3]
title

//표현식이면서 문장
title = 'JavaScript';

sayHi();

console.log('hi');

///조건 연산자 = 삼항 연산자
/// 조건 ? truthy 할 때 표현식 : falsy 할 때 표현식

const CUT_OFF = 80;

function passChecker(score) {
  return score > CUT_OFF ? '합격' : '불합격';
}


const msg = sepeed > 50 ? '[주의!]과속주행 중입니다.' : '정속주행 중입니다.';