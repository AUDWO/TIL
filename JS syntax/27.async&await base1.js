fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {console.log(result); });

// 똑같이 작  

async function fetchAndPrint() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const result = await response.text();
	console.log(result);
}  

//await은 그 뒤에 있는 코드를 실행하고 그거이 return하는 promise객체가 fulfilled상태가 될 때까지 기다린다
//그리가 해당 promise객체가 fulfilled상태가 되면 그 작업 성공 결과를 추출해서 리턴한다.
//async가 붙어있는 함수 안에 비동기 실행이 되는 부분이 있다는 뜻은 함수의 코드 중에서 promise객체를 리턴하는 코드가 있다는 뜻이다
//바로 그앞에 await을 붙여 promise객체가 fulfilled 상태가 될 때까지 기다려주는 것이다
//그 후 그 작업 성공 결과를 리턴해준다.



//비동기 샐행이 되는지 알아 볼 수 있는 예
//console.log에 나와있는 숫자의 순서대로 코드가 출력된다
//async는 fetchAndPrint함수가 비동기 실행되는 함수라는것 을 알려준다
//즉 함수안의 내용이 즉시 실행되는것이 아닌 함수 바깥쪽의 코드들이 다 실행되고 나서 실행이 된다는 


async function fetchAndPrint() {
	console.log(2);
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	console.log(7);
	const result = await response.text();
	consolelog(result);
}
 =
console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);



//async와 await를 사용하면 
//1.Promise객체를 사용할 때,then메소드 등을 사용하지 않고도
//2.마치 동기 실행 코드처럼 코드를 훨씬 더 간단하고 편하게 작성 할 수 있다.


/* async 함수 안의 코드가 실행되다가 await을 만나면, 일단 await 뒤의 코드가 실행되고, 코드의 실행 흐름이 async 함수 바깥으로 나가서 나머지 코드를 다 실행합니다. 물론 함수 바깥에 더 이상 실행할 코드가 없을 수도 있습니다. 
어느 경우든 그 이후로는, await 뒤에 있던 Promise 객체가 fulfilled 상태가 되기를 기다립니다. 그리고 기다리던 Promise 객체가 fulfilled 상태가 되면 await이 Promise 객체의 작업 성공 결과를 리턴하는 겁니다. */

