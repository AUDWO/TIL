.//객체 지향 프로그래밍: 객체 간의 상호작용을 중심으로 하는 프로그래밍

//객체를 생성하는 방법

// object-literal
const user = {
	emai:'kmjstj3@naver.com',
	buy(item) {
		console.log('hello')
	}

}


//Factory function:객체를 생성해서 return하는 함


function createUser(email, birthdate) {
  const user = {
    email,
    birthdate,
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    },
  };
  return user;
}



//Constructor function:객체를 생성하는 함수

fuction User(email, birthdate) {
	this.email = email;
	this.birthdate = birthdate;
	this.buy = function (item) {
		console.log(`${this.eamil} buys ${item.name}`)
	};
}

const item = {
	name: '스웨터'
	pric:30000,
};
// Constructor 함수를 호출 하려면 new를 붙어야 한
//보통 함수 이름은 소문자로 시작 but Con 함수는 대문자로 시작
const user1 = new User('Chris123@gmail.com', '1992-09-10')



//Class 

class User {
	constructor(email, birthdate) {
		this.email = eamil;
		this.birthdate = dirthdate;
	}

	buy(item) {
		console.log(`${this.email} buys ${item.name}`);
	}
}

const item = {
	name: '스웨터'
	price:30000,
};


const user1 = new User(email, birthdate);

user1.buy(item);