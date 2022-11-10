//Promise Chaining:then메소드를 연속적으로 붙이는 것
//then메소드가 사실 새로운promise객체를 리턴하기 때문에 연속적으로 then메소드를 쓸 수 있다
//일단 가장먼저 fetch함수에서 promise객체가 return되면 그 promise객체의 메소드 then을 쓸 수 있다.(참)


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
   //text메소드는 promise객체를 리턴하는 메소드임(json메소드도 마찬가지)
  .then((response)=> response.text())
  .then((result)=> {
  	const users = JSON.parse(result);
  	return users[0];
  })



//Promise Chaining이 필요한 경우
//비동기 작업을 순차적으로 처리하기 위해

console.log('Start');
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result)=> {
  const users = JSON.parse(result);
  const {id} = user[0];
  fetch('https//jsonplaceholder.typicode.com/post?userId=${id}')
    .then((response)=> response.text())
    .then((posts)= > {
      console.log(posts);
    });
  });

console.log('End');

//----------------------------------------------

console.log('Start');
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result)=> {
  const users = JSON.parse(result);
  const {id} = user[0];
  return fetch('https//jsonplaceholder.typicode.com/post?userId=${id}')
  });
  //콜백이 promise객체를 return하면 다음 then메소드가 return한 promise객체와 같아
  .then((response)=> response.text())
  .then((posts)=> {
  	console.log(posts);
  });

console.log('End');

//이런 성질을 잘 이용하면 콜백 안에서 프로미스 객체를 리턴하는 경우 콜백 안에
//then메소드를 쓸 필요가 없다.