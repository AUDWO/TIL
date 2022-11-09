//비동기 실행: 나중에 콜백 실행됨으로써 작업이 마무리되는 것을 의마한다
//비동기 실행의 필요성:리퀘스트를 보내고 리스폰스를 받을 때까지 시간을 낭비할 필요가 없음


console.log('Start')
//then메소드를 통해 콜백을 등록후 바로 그 다음 줄의 코드가 실행 되어진(end가 먼저 출력됨)
//그 후 리스폰스를 받아 또 콜백이 순서대로 실행되면서 값을 출력
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=> response.text())
  .then((result)=> {console.log(result); });

console.log('End')  


//비동기 함수들의 또 다른 예시

//setTimeout함수

console.log('a');
setTimeout(() => { console.log('b'); }, 2000);
console.log('c');
//출력순서: a  c  b

//----------------------------------

//setInterval함수

console.log('a');
setInterval(() => { console.log('b'); }, 2000);
console.log('c');


//promise:어떤 작업에 관한 "상태 정보"를 갖고 있는 객체
//promis객체는 크게 세 가지 중 하나의 상태를 가진다
//pending:진행중 fulfilled:성공 rejected:거부 (보통 처음pending이였다가 fulfilled가 된다)

//만약 작업이 성공해서 promise객체가 fulfilled가 된다면 promise객체는 그 작업의 성공 결과도 함께 가진다.
//(성공 시)promise:서버가 보내준 response를 작업 성공 결과라고 하고 promise에 담는다 
//(실패 시)promise:작업의 실패 이유에 관한 정보를 promise에 담는다

//then메소드를 조금더 자세히 설명하면 promise객체가 pending에서 fulfilled로
//상태가 변경 될 때 실행할 콜백 함수를 등록할 수 있게 해주는 메소드

//-----------------------------------------------------

//Promise Chaining:then메소드를 연속적으로 붙이는 것
//then메소드가 사실 새로운promise객체를 리턴하기 때문에 연속적으로 then메소드를 쓸 수 있다

fetch('https:..jsonpalceholder.typicode.com/users')
  .then((response)=> response.text())
  .then((result)=>{
  	const users = JSON.parse(reslut);
  	return user[0];
  })
  .then((user)=>{
  	console.log(user)
  	const {address} = user;
    return address;
  })
  .then((geo)=> {
  	console.log(geo)
  	const {geo} = address;
  	return geo;
  })

//then메소드가 리턴하는 promise객체는 then메소드 안에 있는 콜백함수가 
//1.promise객체를 리턴하는 경우와 2.promise객체가 아닌 값을 리턴하는경우에 따라 종류가 2가지로 나뉜다.


//1번경우 콜백이 리턴한 프로미스 객체와 동일한 상태와 결과를 갖게 된다
//먼저 then메소드에서 리턴한 promise객체는 pending상태이고 콜백이 리턴한 promise가 fulfilled가 되면
//(여기서 콜백이 리턴한 promise가 fulfilled가 된다는 것은 response를 잘 받았다는말)
//then메소드에서 리턴한 promise객체도 같이 fulfilled가 되고 콜백이 return한 promise와 동일한 값을 갖는다


//콜백이 promise를 리턴하는경우
fetch('https://jsonplaceholder.typicode.com/users')
  .then((reponse)=>response.text())
  .then((result)=>{
  	const users = JSON.parse(result);
  	return users[0];
  })


//2번 단순 숫자나 문자열,일반 객체 같은 것들을 리턴한 경우
//이 경우 then메소드가 리턴했던 promise객체는 fulfilled상태가 되고 콜백의 리턴값을 작업 성공 결과로 갖게 된다.

//콜백이 promise객체가 아닌 다른 값을 리턴하는경
  .then((user)=> {
	 console.log(user);
	 const {address} =user;
	 return address
	})





//text메소드(json메소드도 마찬가지)
//fetch 함수로 리스폰스를 잘 받으면, response 객체의 text 메소드는, fulfilled 상태이면서 리스폰스의 바디에 있는 내용을
//string 타입으로 변환한 값을 '작업 성공 결과'로 가진 Promise 객체를 리턴




fetch('https://jsonplaceholder.typicode.com/users')
   //response.text()가 바로 promise객체이다
   //text메소드는 promise객체를 리턴하는 메소드이
  .then((response)=> response.text())
  .then((result)=> {
  	const users = JSON.parse(result);
  	return users[0];
  })

