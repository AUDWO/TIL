//만약 async 함수 안에 promise객체가 rejected가 될 때

async function fetchAndPrint() {
	try {
	  const response = await fetch('https://jsonplaceholder.typicode.commm/users');
	  const result = await response.text();
	  console.log(result);
	} catch (error) {
	  console.log(error);
	} finally {
	  //promise chaining에서와 같은 기능을 구현
	  console.log('exit');
	}
}


//------------------------------------------------------

//이 코드에서는 이전의 promise객체가 fulfilled인지 rejected인지 확인하기도 전에 
//다음 함수의 await을 만나버린다. 이렇게 미처 상태를 확인하지 못한 여러 promise객체들은
//나중에 그것이 fulfilled 또는 rejected가 된 순서대로 await문이 작업 성공 결과를 추출하

async function test1() {
  const result = await Promise.resolve('success');
  console.log(result);
}

async function test2() {
  try {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => { resolve('last'); }, 3000);
    });
    const result = await p;
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

async function test3() {
  try {
    const result = await Promise.reject('fail');
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

test1();
console.log('JavaScript');
test2();
console.log('Programming');
test3();

//실행 순서: JavaScript-Programming-success-fail-last



