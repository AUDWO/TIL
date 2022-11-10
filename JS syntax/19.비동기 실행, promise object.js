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


