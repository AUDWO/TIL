//Map
//Map은 이름이 있는 데이터를 저장한다는 점에서 객체와 비슷
const codeit = new Map();

// set 메소드
//map.set(key, value): key를 이용해 value를 추가하는 메소드.
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

console.log(codeit);
//>>>Map(3) { 'title' => '문자열 key', 2017 => '숫자형 key', true => '불린형 key' }


// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
//map.delete(key): key에 해당하는 값을 삭제하는 메소드.
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0

//문자열과 심볼 값만 key(프로퍼티 네임)로 사용할 수 있는 일반 객체와는 다르게
//Map 객체는 메소드를 통해 값을 다루기 때문에, 다양한 자료형을 key로 활용할 수 있다는 장점이 있다.


//Set
//Set은 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷합니다.

const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0

//Set은 중복되는 값을 허용하지 않는 독특한 특징이 있다
//최초에 추가된 순서를 유지하면서,
//나중에 중복된 값을 추가하려고 하면 그 값은 무시하는 특징이 있다.

const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}