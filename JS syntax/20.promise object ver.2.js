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