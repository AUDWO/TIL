//overriding:객체를 상속 받아 메소드의 이름은 같지만 내용은 다른 메소드를 쓸 때
//보통 자식 클래스에서 부모 클래스의 메소드를 오버라이딩함

//다형성
//다형성을 사용하기 위해서는 같은 이름의 메소드를 사용해야 함
//하나의 변수에 다양한 종류의 객체를 가리킬 수 있는 것
const user1 = new User('kk@naver.com', '1999');
const user2 = new User('kmm@naver.com', '1999');
const user3 = new User('hk@naver.com', '1997');

const puser1 = new PremiumUser('kk@naver.com', '1999');
const puser2 = new PremiumUser('kmm@naver.com', '1999');
const puser3 = new PremiumUser('hk@naver.com', '2097');

const users = [user1, puser1, user2, puser2, user3, puser3];

user.forEach((user)=> {
	//user =>다형성
	user.buy(item);
});

//부모 메소드를 오버라이딩 하고 싶지만 일부만 하고 싶을때도 super을 쓴다

class User {
	constructor(email,birthdate) {
		this.email = email;
		this.birthdate = birthdate;
	}

	buy(item) {
		console.log(`${this.email} buys ${item.name}`);
	}
}

class PremiumUser extends User {
	constructor(email, birthdate, level, point) {
		super(email, birthdate);
		this.level = level;
		this. point = point;
	}

	buy(item) {
		super.buy(item);
		this.point += item.price * 0.05;
	}
}



//instanceof
//자신이 어디클래스 출신인지를 알려줌
//단 자식 클래스로 만든 객체는 부모 클래스로 만든 객체로도 인정한다 
const user1 = new User('kk@naver.com', '1999');
const user2 = new User('kmm@naver.com', '1999');
const user3 = new User('hk@naver.com', '1997');

const puser1 = new PremiumUser('kk@naver.com', '1999');
const puser2 = new PremiumUser('kmm@naver.com', '1999');
const puser3 = new PremiumUser('hk@naver.com', '2097');

const users = [user1, puser1, user2, puser2, user3, puser3];

users.forEac((user) =>{
	console.log(user instanceof PremiumUser);
})

//분기는 조건문을 의미한다


//static:class자체로 접근하기위해(객체를 만들기 위한 class가 아님)
//class 그 자체에 달려있는 static프로퍼티와 static메소드임
class Math {
	static PI = 3.14;

	static getCircleArea(radius) {
		return Math.PI * radius * radius;
	}
}

//수정도 가능

Math.PI = 3.141592;
Math.getRectangleArea = function (width, height) {
	return width * height;
}

console.log(Math,PI);
console.log(Math.getRectangleArea(4,5))