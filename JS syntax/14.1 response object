//fetch 함수는 어떤 객체를 리턴하는데(Promise 객체)
//이 객체의 then 메소드로, '리스폰스가 왔을 때 실행할 콜백'을 등록할 수 있다
//이렇게 등록된 콜백들은 then 메소드로 등록한 순서대로 실행되고, 이때 이전  리턴값을 이후 콜백이 넘겨받아서 사용할 수 있다

fetch('https://www.google.com')
  .then((response)=> {console.log(response);});

//이렇게 적지 않고 

fetch('https://www.google.com')
  .then((response)=> response.tex())
  .then((result)=> {console.log(result);});

//이렇게 쓰는 이유는 바로 response파라미터에는 리스폰스에 관한
//각종 부가 정보들과, 실제 내용을 함께 갖고 있는 하나의 객체이기 때문에  
//response객체의 text라는 메소드를 호출해야한다.
