//굳이 변수에 대입 할 함수를 실행하지 않고서도 대입 할 수 있다

const ne = () => "dwd"

console.log(ne) 
// >>> [Function: ne]

console.log(ne())
//dwdw


//--------------------------
//번


function makeAdder(x) {
	return function(y){
		return x+y;
	}
}

const add3 = makeAdder(3);
console.log(add3(2)); //5

const add10 = makeAdder(10);
console.log(add10(5)); // 15
console.log(add3(1)); //4