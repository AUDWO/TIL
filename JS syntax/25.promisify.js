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
