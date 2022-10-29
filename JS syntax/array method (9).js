//forEach



const members = ['영훈','윤수','동욱','태호'];
 

function (arrays) {
	for (let args of arrays) {
	console.log(`${args}입니다)
	}
}
//----------------------------------------
const firstNames = ['영훈','윤수','동욱','태호'];
const lastNames = ['강','이','손','성'];

fisrtNames.forEach((firstName, i) => {
	console.log(`${lastNames[i]}${firstName}님이 입장하셨습니다`)
});