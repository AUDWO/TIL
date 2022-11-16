//비동기 실행

//1.특정 작업이 시작되고, 그 작업이 모두 완료되기 전에 바로 다음 코드가 실행되는 방식의 실행, 나머지 작업은 나중에 콜백을 통해 수행되는 방식의 실행
//2.콜백을 등록해두고, 추후에 특정 조건이 만족되면 그 콜백으로 나머지 작업을 수행하는 방식의 실행


//비동기 실행 문법 3가지

//(1) 파라미터로 바로 콜백을 전달하는 형태의 전통적인 비동기 실행 함수
setTimeout(() => {
  console.log('asynchronously executed');
}, 2000);

button.addEventListener('click', (event) => { console.log('You Clicked'); });
//여러 비동기 작업의 순차적인 처리가 필요한 경우 callback hell 문제가 발생







//(2)Promise
fetch('https://www.google.com')
  .then((response) => response.text())
  .then((result) => { console.log(result); })
  .catch((error) => { console.log(error); })
  .finally(() => { console.log('exit'); });

//Promise 객체를 사용하면 콜백 헬 문제를 방지하면서, 여러 비동기 작업을 순차적으로 처리할 수 있다. 또한

function readFile_promisified(filename) {
  const p = new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (error, data) => {
      if (error) {
        reject(error); // 에러 발생 시 -> rejected
      } else {
        resolve(data); // 파일 내용 읽기 완료 -> fulfilled
      }
    });
  });
  return p;
}

//이런식으로 promisify해서 callback hell의 가능성을 없애고 Promise Chain안에서 그 콜백의 return값을 사용할 수 있다.






//(3)async/await
async function fetchAndPrint() {
  try {
    const response = await fetch('https://www.google.www');
    const result = await response.text();
    console.log(result);
  } catch(error) {
    console.log(error);
  } finally {
    console.log('exit');
  }
}

fetchAndPrint();





//그렇지만 한가지만 고집할 수 없는 이유

/*1.콜백을 함수의 파라미터로 바로 전달하는 전통적인 방식의 비동기 실행 함수들 중에서도 setInterval, addEventListener처럼 그 콜백이 단 한번이 아니라 여러 번 실행되어야 하는 것들은 Promisify해서 사용하면 안 됩니다. (중요)!!  Promise 객체는 한번 fulfilled 또는 rejected 상태가 되고나면 그 상태와 결과가 다시는 바뀌지 않기 때문입니다.  !!(중요)*/



/*2.async/await 구문의 경우, await은 async 함수 안에서만 사용할 수 있고, 코드의 top-level(어떤 함수 블록 안에 포함된 것이 아닌 코드의 최상위 영역)에서는 사용될 수는 없습니다. 그래서 코드의 top-level에서 async 함수가 리턴한 Promise 객체의 작업 성공 결과를 가져오려면 await을 사용할 수는 없고, 여전히 then 메소드를 사용해야한다*/