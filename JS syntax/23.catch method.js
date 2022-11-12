//catch 메소드

fetch('https://jsonplaceholder.typicode.commmmmm/users')
  .then((response)=> response.text())
  //아래와 동.then(undefined, (error) => {console.log(error); })
  //catch메소드가 리턴했던 프로미스 객체가 fulfilled가 되고 undefined를 
  //작업 성공 결과로 갖게 된
  .catch((error)=> {console.log(error); })
  .then((result) => { console.log(result);})

//result에 뭐가 왜 나올지 생각해보

//Internet Disconnected
fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then((response) => response.text()) // Promise-B
  .then(undefined, (error) => { console.log(error); }) // Promise-C
  .then((result) => { console.log(`Quiz: ${result}`); }); // Promise-D   


//프로미스 체이닝에서 어느 프로미스 객체가 rejected 상태가 되더라  
//잘 대응하기 위해서는 catch 메소드를 가장 마지막에 써 주는 것이 좋다

fetch('https://jsonplaceholder.typicode.commmmmm/users')
  .then((response)=> response.text())
  .then((result) => { console.log(result);})
  .catch((error)=> {console.log(error); })



