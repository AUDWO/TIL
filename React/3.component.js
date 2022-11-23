import ReactDOM from 'react-dom';

const element = <h1>안녕 리액트!</h1>;

console.log(element)
ReactDOM.render(element, document.getElementById('root'));

//리액트 엘리먼트:console에 JS객체가 출력 되는데 그때 그 객체를 React Element라고 부른다
//좀더 자세히 정의하자면 JSX 문법으로 작성한 요소는 결과적으로 자바스크립트 객체가 되는데 이 객체를 리액트 엘리먼트라고 한다
//이때 render안에 리액트 엘리먼트를 아규먼트 값으로 주면 이 객체를 해석해서 HTML로 렌더링한다


import ReactDOM from 'react-dom';
//Hello라는 함수를 리액트 컴포넌트라고 부른다.
//리액트 컴포넌트가 되기 위해서는 항상 함수이름을 대문자로 시작해야하고 JSX문법으로 만든 리액트 엘리먼트를 리턴해줘야 한다

function Hello() {
	return <h1>안녕 리액트</h1>;
}

const element = (
  <>

    <Hello />
    <Hello />
    <Hello />
  </>  
);

ReactDOM.render(element, document.getElementById('root'));


//리액트에서 이미지 파일을 사용하려면 다른 파일에서 import해서 img태그의 scr속성으로 넣어줘야 한다

import diceBlue01 from './assets/dice-blue-1.svg';

function Dice() {
	return <img src={diceBlue01} alt='주사위' />;
}

export default Dice;