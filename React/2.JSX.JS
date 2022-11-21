//JSX:자바스크립트에서 HTML문법을 편리하게 활용할 수 있는 문(자바스크립트와 HTML을 섞어서 쓸 수 있는 자바스크립트의 확장된 문법)

ReactDOM.render(<p> id="hello">안녕 리엑트!</p>, document.getElementById('root'));

ReactDOM.render(<p> className="hello">안녕 리엑트!</p>, document.getElementById('root'));


//for태그:label태그에서 input태그와 함께 사용되는 속성 그런데 자바스크립트에서도 for을 다르게 사용하기 때문에 htmlFor라고 작성해야한다

ReactDOM.render(
  <form>
    <label htmlFor="name">이름</label>
    <input id="name" type="text" />
  </form>,
 document.getElementById('root'));




//이벤트 등록을 Camel Case(두 번째 단어부터 대문자로 적어야 함)로 해야함
//JSX문법에서는 두단어 이상 나열 할 때 Camel Case로 작성해야  




//Fragment:리액트에서 JSX문법을 활용할 때는 반드시 하나의 팩으로 감싸 주어야 한다


import {Fragment} from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Fragment>
    <p>안녕</p>
    <p>리액트!</p>
  </Fragment>,
  document.getElementById('root')
);

//Fragment가 많이 쓰이기 때문에 더 간단하게 표현 가능


import ReactDOM from 'react-dom';

ReactDOM.render(
  <>
    <p>안녕</p>
    <p>리액트!</p>
  </>,
  document.getElementById('root')
);
