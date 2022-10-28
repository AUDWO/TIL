//error
//error는 name과 message 프로퍼티를 갖는다

console.log(codeit);//>>>ReferenceError 

//error객체

const error = new errorName('errorMessgae')

>>>const error2 = new TypeError('타입 에러가 발생했습니다');
//>>>error객체가 만들어진다 (단 진짜 error가 발생하는 것은 아님)

throw error//>>>진짜 error발

//try catch 문

try {
	console.log('에러 전')

	const codeit  = '코드잇';
	console.log(codeit)

	codeit = 'codeit' //error
	const langauge = 'Javascript';

} catch (error) {
	console.log('에러 후')
	console.log(error);//>>>error가 발생한것 처럼(빨간색 빼고)뜸
	console.error(error);//>>>찐 error발

}


//try catch문 활용>> 예외 처리(Exception Handling):실행가능한 코드에서 오류가 뜨는걸 말함

function print(members) {
	try {
		for (const member of members) {
			console.log(member);
		}
	} catch (err) {
		console.error(err);
		alert(`${err.name}가 발생했습니다. 콘솔창을 확인해주세요`)
	}
}

const teamA = ['가','나','다','라'];
print(teamA);

const codeit = {name:'codeit'};
print(codeit);
//try catch문을 활용해서 error가  떠야 할 상황에 진짜error를 방지해서 
//그 다음 함수를 실행할 수 있게 해준다.
const teamC = ['A','B','C','D'];
print(teamC);
//>>>error가 발생해도 teamC까지 제데로 작동한다.


//finally문

function printMembers(...members) {
  for (const member of members) {
    console.log(member);
  }
}

try {
  printMembers('영훈', '윤수', '동욱');
} catch (err) {
  alert('에러가 발생했습니다!');
  console.error(err);
} finally {
  const end = new Date();
  const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
  console.log(msg);
}

//finally문에서 error가 발생할때
//finally문 안에 catch문을 넣어주면 된다

try {
  try {
    // 실행할 코드
  } catch (err) {
    // 에러가 발상했을 때 실행할 코드
  } finally {
    // 항상 실행할 코드
  }
} catch (err) {
  // finall문에서 에러가 발생했을 때 실행할 코드
}
