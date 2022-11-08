//어떤 정보를 교환할 때 사용하기 위해서 만들어진 데이터 포

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

