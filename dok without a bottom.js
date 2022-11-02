//콜백 함수는 코드를 통해 명시적으로 호출하는 함수가 아니라, 개발자는 단지 함수를 동록하기만
//고, 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수를 말한다.
const getTwiice = number => number * 4; //변수이름이 곧 함수 이름이 되는

//--------------------------------------------

data.forEach((todo, i) => { // 1번 조건
  const li = document.createElement('li'); // 2번 조건
  
  if (todo.isClear) {
    li.classList.add('item', 'done'); // 4번 조건
  } else {
    li.classList.add('item'); // 3번 조건
  }

  li.textContent = `${i + 1}. ${todo.title}`; // 5번 조건
  list.appendChild(li); // 6번 조건
}); 


//if문을 작성할 수 있는 여러가지 방


// if 문 활용
if (todo.isClear) {
  li.classList.add('item', 'done');
} else {
  li.classList.add('item');
}

// 삼항 조건 연산자 활용
todo.isClear
  ? li.classList.add('item', 'done')
  : li.classList.add('item');

// 논리 연산자 활용
li.classList.add('item', todo.isClear && 'done');

//user의 존재로 조건을 세울때는 그냥 user만 쓰면 됨
 const message = user
    ? `${user.userName}님의 이메일은 ${user.email} 입니다.`
    : '이메일을 찾을 수 없습니다. 입력 정보를 다시 확인해 주세요.';

  alert(message);


  //이벤트 버블링\

  //아래 핸들러는 <div>에 할당되어 있지만, <em> 이나 <code>같은 중첩 태그를 클릭해도 동작한다
  <div onclick="alert('div에 할당한 핸들러!')">
  <em><code>EM</code>을 클릭했는데도 <code>DIV</code>에 할당한 핸들러가 동작합니다.</em>
</div>


//버블링 정의:
//한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작한다.
//가장 최상단의 조상 요소를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작한다
//document(는 DOM 트리의 최상위 객체)만날때까지