const p = new Promise((resolve, reject) => {
    //resolve:p promise객체를 fulfilled상태로 만들어주고 성공결과로 success라는 값을 저장한
	setTimeout(() => {resolve('success'); }, 2000)
});

p.then((result) => {console.log(result); });


const p = new Promise((reslove, reject) => {
    //reject:p promise객체를 rejected상태로 만들어주고 파라미터에 적힌 객체를 실패정보로 담는
	setTimeout(() => {reject(new Error('fail')); }, 2000);
});

p.catch((error) => {console.log(error); });

//-----------------------------------------------
//promisify:전통적인 형식의 비동기 실행함수를 promise객체로 감싸서 그 promise 객체를 리턴하는 형ㅅ

//1.setTimeout 함수 예시

function wait(text, milliseconds) {
	const p = new Promise((resolve, reject) =>{
		setTimeout(() => { resolve(text);}, 2000);
	});
	return p;
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => wait(`${result} by Codeit`,2000))
  .then((result) => {console.log(result); });


//------------------------------------------------
//2.callback hell

fs.readFile('file.txt', 'utf8', (error1, data1) => {
	if (error1) {
		console.log(error1);
	} else {
		console.log(data1);
		fs.readFile('file2.txt', 'utf8', (error2,data2) => {
			if (error2) {
				console.log(error2);
			} else {
				console.log(data2)
			}
		})
	}
})

// ==

function readFile_promisified(filename) {
	const p = new Promise((resolve, reject) => {
		fs.readFile(filename, 'utf8', (error, data)=> {
			if (error) {
				reject(error);
			}  else {
				resolve(data);
			}
		})
	})
	return p;
}

readFile_promisified('file1.txt')
  .then((data) => { console.log(data); return readFile_promisified('file2.txt'); })
  .then((data) => { console.log(data); return readFile_promisified('file3.txt'); })
  .then((data) => { console.log(data); })
  .catch((error) => { console.log(error); });


//3.Promisify를 하면 안 되는 함수들도 있다.

let count = 0;

function addEventListener_promisified(obj, eventName) { // 이런 Promisify는 하지 마세요
  const p = new Promise((resolve, reject) => {
    obj.addEventListener(eventName, () => { // addEventListener 메소드
      count += 1;
      resolve(count);
    });
  });
  return p;
}

addEventListener_promisified(box, 'click').then((eventCount) => { console.log(eventCount); });

//이코드를 실행해보면 처음에 딱 1이 출력되고 나서 그 다음 count 값들은 출력되지 않는다
//pending상태에 있던 promise객체가 한번 fufilled 상태 또는 rejected상태가 되고 나면
//promise객체의 상태 및 결과가 고정되어 그 뒤로는 바뀌지 않기 때문
//콜백이 여러 번 실행 되어야하는 비동기 실행 함수인 경우에는 promisify를 하면 안된다\



//이미 상태가 결정된 promise객체 

//1.fulfilled 상태 promise객체 만들
const p = Promise.resolve('success');

const p = Promise.reject(new Error('fail'));


//여러 Promise 객체를 다루는 방법

//1.all메소드

//all메소드도 then 메소드처럼 새로운 promise객체를 리턴함
//all메소드는 아규먼트로 들어온 배열 안에 있는 모든 promise객체가 fulfilled상태가 될 때까지 기다린다
//배열 안에 있는 모든 객체가 fulfilled상태가 되면 all메소드가 리턴했던 promise객체는 fulfilled상태가 되고
//각 promise객체의 작업 성공 결과들로 이루어진 배열을, 그 작업 성공 결과로 갖게 된


// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const p3 = fetch('https://learn.codeit.kr/api/members/3').then((res) => res.json());

Promise
  .all([p1, p2, p3])
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  });


//만약 하나의 객체가 (예를 들어 p3) rejeacted가 되면 전체 작업 실패로 간주한다
//하나의 객체거 rejected상태가 되었을때 대비하려면

Promise
  .all([p1, p2, p3])
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  })
  .catch((error) => {
    console.log(error);
  });



  //------------------------------------------

  //2.race메소드
  //3개의 promise객체중에 가장 빨리 fulfilled되는 객체를 race메소드가 리턴한 promise객체와
  //

  const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success'), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail')), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('fail2')), 4000);
});

Promise
  .race([p1, p2, p3])
  .then((result) => {
    console.log(result); // hello 출력
  })
  .catch((value) => {
    console.log(value);
  });


  //3.allSettled메소드 

  //fulfilled상태와 rejected상태를 묶어서 settled상태라고 한다
  //배열 내의 모든 Promise객체가 fulfilled또는 rejected상태가 되기까지 기다리고 
  //pending상태의 promise객체가 하나도 없게 되면, allSettled메소드가 리턴한 객체의 
  //상태는 fulfilled가 되고 그 작업 성공 결과로 하나의 배열을 갖게 된다
  //작업 성공 결과:배열 각 promise객체의 1.최종 상태를 status프로퍼티, 2.그 작업 성공 결과는 value프로퍼티 3.그 작업 실패 정보는 reaseon프로퍼티

  [
   {status: "fulfilled", value: 1},
   {status: "fulfilled", value: 2},
   {status: "fulfilled", value: 3},
   {status: "rejected",  reason: Error: an error}
  ]


  //4.any메소드

  //여러 promise객체들 중에서 가장 먼저 fulfilled상태가 된 promise객체의 상태와 결과가
  //any메소드가 리턴하는 객체에 똑같이 반영된다 그리고 만약 모든 promise객체가 rejected상태가
  //되면 error를 발생 즉 any메소드는 여러 promise객체중 단 한개만이라도 fulfilled상태가 되면 된