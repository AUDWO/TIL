//캡슐:객체의 특정 프로퍼티에 직접 접근하지 못하도록 막는 것
class User {
	constructor(email, birthdate) {
		this.email = email;
		this.birthdate = birthdate;
	}

	buy(item) {
		console.log(`${this.email} buys ${item.name}`);
	}
	get email() {
		return this._email;
	} 
	//setter함수
	//this.email = email; 부분에서 email 프로퍼티가 생성되는 것이 아니다.
    //해당 부분에서 set email(address)가 실행되고,
    //그때 _email 프로퍼티가 생성된다.
	set email(address) {
		if (address.includes('@')) {
			//_email이라고 새롭게 정의하는 이유:
			//만약 email이라면 다시 set함수가 발동 할 것이고
			//그럼 무한 루프에 빠지게 된다
			this._email = address;
		} else {
			throw new Error('invalid email address');
		}
	}
}

const item = {
	name:'스웨터',
	price:30000,
};

const user1 = new User('chris123@google.com','1992-03-21');

user1.email = 'chris_rober@google.com';
console.log(user1.email);
console.log(user1._email);
