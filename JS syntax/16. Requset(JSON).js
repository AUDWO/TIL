//JSON
//자바스크립트의 Object Literal 문법 및 배열 표현법 등과 
//일정 부분 호환되는 이 데이터 포맷

('https://jsonplaceholder.typicode.com/users')
  .then((result)=> response.text())
  .then((result)=> {const users = JSON.parse(result)});

  이렇게 string 타입의 JSON 데이터를 실제 자바스크립트 객체로 변환하는 것을 Deserialization, 우리말로는 역직렬화라고 한다


//Request종류

//데이터 조회:GET
//데이터 추가:POST
//데이터 수정:PUT
//데이터 삭제:DELETE

//Request는 head와 body로 이루어져 있다

//head:request에 대한 부가 정보 (메소드)
//헤더란 헤드 안에 존재하는 하나하나의 키와 값의 쌍을 의미한

//body:실제 데이터를 담는 부분

//post나 put 데이트를 추가하고 수정하는 것은 body가 필요함
//But get이나 delete는 body가 필요하지 않음

//http1.1ver
//start-line에 method와 path가 나타난다
//GET /men/shirts HTTP/1.1 
//헤더 2: 값
//헤더 3: 값 
//...

//http2.0ver
//가상의 헤더로 나타난다(가상 헤더는 앞에 콜론(:)이 붙는)
:method:GET
:path: /men/shirts
//헤더 2: 값
//헤더 3: 값 
//...


//GET Request
fetch('https://learn.codeit.kr/api/members')
  .then((response)=> response.text())
  .then((result)=> {console.log(result);});


//-------------------------------------------


//POST Requset(추가)

const newMember = {
	name: 'Jerry',
	email: 'jerry@codeitmall.kr',
	department: 'engineering'
};
//fetch의 아규먼트에 들어있는 객체를 옵션객체라고 부른
fetch('https://learn.codeit.kr/api/members', {
	method: 'POST'
	//stringify메소드는 객체를 string타입의 JSON데이터로 바꿔
	//어떤 JS의 객체가 담고 있는 정보를 외부에 전송하고 싶다면 써줘야 
	body: JSON.stringify(newMember),
})

  .then((response)=> response.text())
  .then((result)=> {console.log(result); });

  //POST Request의 body
  //Request Payload부분이 body부분이


  //-------------------------------------------

 //PUT Request(수정)

const member = {
	name:'Alice',
	email: 'alice@codeitmall.kr',
	//고칠 부분을 고친다
	department:'marketing',
};
//고쳐줄 부분을 url을 수정하여 접근한다
fetch('https://learn.codeit.kr/api/members/2',{
	method:'PUT',
	body:JSON.stringify(member),
})
 
  .then((response)=> response.text())
  .then((result)=> {console.log(result); });


  //--------------------------------------------

  //DELETE Request

  fetch('https://learn.codeit.kr/api/members/2',{
	method:'DELETE',
})
 
  .then((response)=> response.text())
  .then((result)=> {console.log(result); });

//자바스크립트 객체 >>>string타입의 JSON데이터로 변환:직렬화(serialization)
//바스크립트 실행 환경에서, 객체라면 가지는 프로퍼티들일 뿐 서버에는 전혀 보낼 필요가 없는 것들
//그리고 특히 이 객체의 메소드 같은 경우 서버에서 이를 인식 가능하도록 보낼 수 있는 방법도 없





//JSON데이터 >>> 자바스크립트 객체로 변환:역직렬화(Deserialization)

const jsonString = '{"x":1, "y":2}';
const obj = JSON.parse(jsonString);

console.log(obj.y);

//text메소드를 사용 했을때

fetch('https://jsonplaceholder.tyicode.com/users')
  .then((response)=> response.text())
  .then((result)=> {const users = JSON.parse(result);});

//json메소드를 사용했을때
//response 객체의 text 메소드 대신 json이라는 메소드를 호출하면
//리스폰스의 내용이 JSON 데이터에 해당하는 경우, 바로 Deserialization까지 수행해줌
fetch('https://jsonplaceholder.tyicode.com/users')
  .then((response)=>response.json())
  .then((result)=> {const users = result;});



  
