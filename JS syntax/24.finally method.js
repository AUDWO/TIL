//finally문

fetch('https://jsonplaceholder.typicode.commmmmm/users')
  .then((response)=> response.text())
  .then((result) => { console.log(result);})
  .catch((error)=> {console.log(error); })
  //작업 실패나 성공 정보가 필요하지 않기 떄문에 파라미터를 비워둔다
  .finally(() => {console.log('exit'); })


fetch('https://jsonplaceholder.typicode.commmm/users')
  .then((response) => response.text())
  .then((result) => {console.log(result); })
  .catch((error) =>{
    console.log(error);
    throw new Error('from catch method');
  })
  //catch문의 promise객체가 rejected 되어도 finally문은 실행된
  .finally(() => { console.log('exit'); });
