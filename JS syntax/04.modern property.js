const title = 'Codeit';

const user1 = {
	title,
};

console.log(user); //>>> {title:'Codeit'}

//------------------------------------------

function get () {

	return `${this.firstName}`
}

const user2 = {
	firstName: 'Tess',
	get,
};

console.log(user) // 'Tess'

//---------------------------
//property name과 value로 사용할 변수나 함수의 이름이 같다면 하만 작
function geetfull() {
	return `${this.firstName} ${this.lastName}`;
};

const user3 = {
	firstName: 'Tess',
	lastName: 'Jang',
	getFullName,
};

//--------------------------


const user4 = {
	firstName: 'Tess',
	lastName: 'Jang',
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};

console.log(user.getFullName());

//계산된 속성명 (computed property name)
const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
	['topic' + 'Name']: 'Modern JavaScript',
	[propertyName]:2017,
	[getJob()]:'프로그래밍 강사'
	//[getJob()]는 함수의 return값을 나타낸
};
//codeit[propertyName]=codeit.birth
//codeit[getJob()]=codeit.job
console.log(codeit); //>>>{ topicName:"Moder JavaScript", ~~~}

