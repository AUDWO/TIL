//async함수가 return하는 promise객체

//1.어떤 값을 리턴하는 경우

//(1) Promise객체를 return하는 경우

async function fetchAndPrint() {
  return new Promise((resolve, reject)=> {
    setTimeout(() => { resolve('abc'); }, 4000);
  });
}

fetchAndPrint();

//해당 promise(함수 안에서return되는)객체와 동일한 상태와 작업 성공 결과(또는 작업 실패 정보)를 가진 Promise객체를 return (그냥 해당 promise객체를 reuturn 한다고 봐도 무방)


//(2) Promise객체 이외의 값을 return하는 경우

async function fetchAndPrint() {
  return 3;
}

fetchAndPrint();

//async 함수 내부에서 숫자, 문자열, 일반 객체 등을 return하면 fulfilled상태이면서 return값을 작업 성공 결과로 가진 promise객체를 리턴한다.



//2.아무 값도 return하지 않는 경우

async function fetchAndPrint() {
  console.log('Hello Programming!');
}

fetchAndPrint();

//fulfilled상태 이면서 undefined를 작업 성공 결과로 가진 promise객체가 return


//3.async 함수 내부에서 에러가 발생했을때

//asyc함수 안에서 에러가 발생하면 rejected상태 이면서, 해당 에러 객체를 작업 실패 정보로 가진 promise객체가 리턴



//async함수 안의 async함수



const applyPrivacyRule = async function (users) {
	const resultWithRuleApplied = user.map((user) => {
	  const keys = Object.keys(user);
	  const userWithoutPrivateInfo = {};
	  keys.forEach((key) => {
	    if (key !== 'address' && key !== 'phone') {
	      userWithoutPrivateInfo[key] = user[key];
	    }
	  });
	  return userWithoutPrivateInfo;
	});

	const p = new Promise((resolve, reject) =>{
		setTimeout(() => {resolve(resultWithRuleApplied); }, 2000);
	});
	return p
};

async function getUsers() {
	try {
		const response = await fetch("https://jsonplaceholer.typicode.com/users");
		const result = await response.text();
		const users = JSON.parse(result);
		const resultWithPrivacyRuleApplied = await applyPrivacyRule(users);
		return resultWithPrivacyRuleApplied;
	} catch (error) {
		console.log(error);
	} finally {
		console.log('exit');
	}
}

//async를 붙이는 위치

// 1) Function Declaration
async function example1(a, b) {
  return a + b;
}

// 2-1) Function Expression(Named)
const example2_1= async function add(a, b) {
  return a + b;
};

// 2-2) Function Expression(Anonymous)
const example2_2 = async function(a, b) {
  return a + b;
};

// 3-1) Arrow Function
const example3_1 = async (a, b) => {
  return a + b;
};

// 3-2) Arrow Function(shortened)
const example3_2 = async (a, b) => a + b;

//즉시 실행 함수

(async function print(sentence) {
  console.log(sentence);
  return sentence;
}('I love JavaScript!'));

(async function (a, b) {
  return a + b;
}(1, 2));

(async (a, b) => {
  return a + b; 
})(1, 2);

(async (a, b) => a + b)(1, 2);

//연습문제

//아래 코드를 async/await로 나타내시오

function pick(menus) {
  console.log('Pick random menu!');
  const p = new Promise((resolve, reject) => {
    if (menus.length === 0) {
      reject(new Error('Need Candidates'));
    } else {
      setTimeout(() => {
        const randomIdx = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[randomIdx];
        resolve(selectedMenu);
      }, 1000);
    }
  });
  return p;
}

function getRandomMenu() {
  console.log('---Please wait!---');
  return fetch('https://learn.codeit.kr/api/menus')
    .then((response) => response.text())
    .then((result) => {
      const menus = JSON.parse(result);
      return pick(menus); // ! random pick function
    });
}

getRandomMenu()
  .then((menu) => {
    console.log(`Today's lunch is ${menu.name}~`);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log('Random Menu candidates change everyday');
  });

  //async/await 로 표현

  function pick(menus) {
  console.log('Pick random menu!');
  const p = new Promise((resolve, reject) => {
    if (menus.length === 0) {
      reject(new Error('Need Candidates'));
    } else {
      setTimeout(() => {
        const randomIdx = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[randomIdx];
        resolve(selectedMenu);
      }, 1000);
    }
  });
  return p;
}

async function getRandomMenu() {
  console.log('---Please wait!---');
  try {
    const response = await fetch('https://learn.codeit.kr/api/menus')
    const menus = await response.json();
    const menu = await pick(menus);
    console.log(`Today's lunch is ${menu.name}~`);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('Random Menu candidates change everyday');
  }
}

getRandomMenu();



//URL에 리퀘스트를 보내고 리스폰스를 받아서 출력하고 나서야 다음 URL에 대한 리퀘스트를 보낼 수 있는 함수
//순차 처리를 하는 함수
async function getResponses(urls) {
  for(const url of urls){
    const response = await fetch(url);
    console.log(await response.text());
  }
}

//URL에 리퀘스트를 다 보내버리고 fulfilled된 response부터 받는 함수

async function fetchUrls(urls){
  for(const url of urls){
    //즉시 실행 함
    (async () => { // 추가된 부분!
      const response = await fetch(url);
      console.log(await response.text());
    })(); // 추가된 부분!
  }
}