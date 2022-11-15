//Ajax:자바스크립트를 사용해서 비동기적으로(=사용자가 보고 있는 화면에 영향을 미치지 않고
//별도로 백그라운드에서 작업을 처리한다는 뜻)리퀘스트를 보내고 리스폰스를 받는데 기반이 되는 기술들의 집합

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://learn.codeit.kr/api/members');
xhr.onload = function () {
  console.log(xhr.response);
};
xhr.onerror = function () {
  alert('Error!');
};
xhr.send();

//그러나 개발 실무에서는 fetch함수 또는 axios패키지를 사용한다
//1.fetch함수로 XMLHttpRequest객체를 사용할 때에 비해 좀더 짧고 간단한 코드로 Ajax통신을 할 수 있다
//2.XMLHttpRequest을 기반으로 더 쓰기 편하게 만들어진 axios라는 패키지가 존재한다는 
//이러한 2가지 이유 때문



//--------------------------------------

//axios:외부 패키
//axios객체에서 리퀘스를 보내는 많은 메소드들이 fetch함수처럼 promise객체를 리턴한다
//axios와 fetch함수의 차이점(axios만 가지고있는 점)

/*모든 리퀘스트, 리스폰스에 대한 공통 설정 및 공통된 전처리 함수 삽입 가능
serialization, deserialization을 자동으로 수행
특정 리퀘스트에 대해 얼마나 오랫동안 리스폰스가 오지 않으면 리퀘스트를 취소할지 설정 가능(request timeout)
업로드 시 진행 상태 정보를 얻을 수 있음
리퀘스트 취소 기능 지원*/

//axios단점:별도로 패키지를 다운로드 해야 



axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });