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
//콜백이 여러 번 실행 되어야하는 비동기 실행 함수인 경우에는 promisify를 하면 안된다