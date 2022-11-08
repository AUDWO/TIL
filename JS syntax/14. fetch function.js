//fetch함수
requset:웹 브라우저가 서버한테
response:서버가 브라우저한테

fetch('https://www.google.com')
  //then 메서드: fetch함수가 리턴하는 프로미스(promise)객체의 메서드+콜백을 등록하는 메소드
  .then((response)=> response.text())
  //맨 처음 then메서드의 콜백함수의 리턴값 response.text는
  //result로 전달된다.
  .then((result)=> {console.log(result);});


  //웹:웹브라우저를 통해 돌아다니는 가상의 연결망 세
  //hyperText:다른 텍스트에 대한 참조를 갖고 있는 텍스트를 의미


//url
//https://www.codeitshopping.com/men/shirt?color=blue&size=m

//https:스킴(scheme)=프로토콜(통신을 하는 두 주체가 지켜야 하는 통신 약)의 이름

//www.codeitshopping.com =>호스트:전 세계 서버 중 하나의 서버를 특정(도메인이라고도 불린다)

// /men/shirts :경로(path):서버 안에 존재하는 데이터를 나타내기 위해 사용하는 부분
//데이터를 패스로 나타내는 방법은 서버마다 다르게 설계

//color=blue&size=m:쿼리(query):데이터에 관한 세부적인 요구사

//----------------------------------------------

//서버에 request를 보내면 생기는 

//(1) 웹 브라우저는 URL에서 호스트(host, 위 그림에서 www.codeitshopping.com에 해당하는 부분) 부분을 보고, 전 세계의 수많은 서버들 중에서 정확히 어느 서버와 통신을 해야 하는지를 찾습니다. 이때 호스트 부분에 적힌 www.codeitshopping.com 같은 것을 도메인 네임(Domain Name)이라고 하는데요. 특정 서버를, 외우기 어려운 IP 주소가 아니라 외우기 쉬운 문자열로 나타낸 것이 바로 도메인 네임입니다. 그럼 어떻게 웹 브라우저는 도메인 네임만으로 특정 서버를 식별할 수 있는 걸까요? 이를 위해서는 Domain Name Resolution이라고 하는 작업을 수행해야 합니다. 이 작업을 수행하면 해당 도메인 네임이 나타내는 특정 서버를 식별할 수 있는데요. 혹시 Domain Name Resolution이 뭔지 궁금한 분들은 코드잇의 또 다른 토픽에 있는 '도메인 네임과 IP 주소' 노트를 참조하세요.

//(2) (1)에서 어떤 서버와 통신해야 하는지를 식별하고 나면, 웹 브라우저는 해당 서버로 리퀘스트를 보냅니다. 이때 URL에서 path 이후의 부분들(보라색 표시한 부분, path와 query)을 리퀘스트에 담아서 보냅니다.

//(3) 리퀘스트를 받은 서버는 리퀘스트에 담긴 path 이후의 부분들을 보고, 그것이 의미하는 데이터를 찾고, 찾은 결과를 리스폰스에 담아서 보내줍니다.

//(4) 그럼 웹 브라우저는 받은 리스폰스의 내용을 갖고 사용자에게 보여줍니다. 이때 리스폰스의 내용이 HTML 코드, Javascript 코드 등에 해당하면 그에 맞는 예쁜 화면을 사용자에게 그려서 보여주는 것이구요. 