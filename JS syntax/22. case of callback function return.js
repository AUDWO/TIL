//fetch함수에서 오류가 났을때

fetch('https://jsonplaceholder.typicode.com/users')
  //첫 번째 콜백은 프로미스 객체가 fulfilled상태가 될 때 실행되기 때문에
  //그 파라미터로 프로미스 객체에 담긴 작업 성공 결과가 넘어오지
  //두 번째 콜백에서는 파라미터로 작업 실패 정보가 넘어온다
  .then((response) =>response.text(), (error)=> {console.log(error); })
  .then((result) => {console.log(result); });

//---------------------------------------------------------

//실행된 콜백이 아무 값도 리턴하지 않는 경우

//return값이 존재 하지 않아 결국 undefined를 return한다 따라서 then메소드에서 return된
//promise객체는 fulfilled 상태가 되고, 그 작업 성공 결과로 undefined를 갖는다
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response) => response.json(), (error) => {alert('Try again!')};
  .then((result) => {console.log(result) });  

//----------------------------------------------------------


//콜백함수에서 오류가 났을때

//then메소드가 return했던 promise객체는 rejected상태가 되고 작업 실패 정보로 해당 에러 객체를 갖게 된다.


//----------------------------------------------------------

//아무런 콜백도 실행되지 않을때

fetch('https://www/google.com')
  .then((response) => response.text())
  .then((reslut)= > {console.log(result)})

//만약 인터넷 연결이 끊어저 fetch문에서 return되는 promise객체가 rejected가 되면
//다음 then메소드의 두번째 파라미터에 작업 실패 정보가 넘어오겠지만
//만약 두번째 파라미터가 없다면 then메소드에서 return한 promise객체는
//fetch문에서 return된 rejected promise객체를 전달받아 동일하게 rejected상태가 되고 똑같은 작업 실패 정보를 갖게 된다.

//한마디로 아무런 콜백ㄷ 실행되지 않는 경우에는 그 이전 promise객체의 상태와 결과가 그대로 이어진다