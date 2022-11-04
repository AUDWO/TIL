//overriding:객체를 상속 받아 메소드의 이름은 같지만 내용은 다른 메소드를 쓸 때
//보통 자식 클래스에서 부모 클래스의 메소드를 오버라이딩함

//다형성
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