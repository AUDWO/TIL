//상속
class User {
	constructor(email, birthdate) {
		this.email = email;
		this.birthdate = birthdate;
	}

	buy(item) {
		console.log(`${this.email} buys ${item.name}`);
	}

}



//부모class의 생성자 함수를 호출 할 때는 extends를 사용한다
class PremiumUser extends User {
	constructor(email, birthdate, level) {
		//부모class의 일반 메소드를 호출하기 위해서는 super을 사용한다.
		super(email, birthdate);
		this.level = level;
	}

	streamMusicForFree() {
		console.log(`Free music streaming for ${this.email}`);
	}

}

	
