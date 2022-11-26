//props(propertys):컴포넌트에 지정한 속성
//컴포넌트에 속성을 지정해주면 각 속성이 모여 하나의 객체가 되어 컴포넌트를 정의한
//함수의 첫 번째 파라미터로 전달 된다
//그렇지만 파라미터 자리가 비어있으면 전달 되지 않음





import Dice from './Dice';

function App() {
	return (
	 <div>
	   //숫자는 {}로 감싸줘야 한
	   <Dice color="red" num={2}
	 </div>
	);
}

export defaul App;

//-----------------------------------------------

const DICE_IMAGES = {
	blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04],
	red: [diceRed01, diceRed02, diceRed03, diceRed04];
};


function Dice(props) {
	const src = DICE_IMAGES[props.color][props.num-1];
	const alt = '${props.color} ${props.num}';
	return <img src={scr} alt={alt} /?->;
}

export default Dice;


//매우 중요(헷갈릴 수 있는것):컴포넌트는 Props를 아규먼트로 받기 때문에 destructuring
function Dice({color, num}) {
	const scr = DICE_IMAGES[color][num-1];
	const alt = '${color} ${num}';
	return <img src={src} alt={alt} />;
}


export default Dice;


//children Props:컴포넌트 함수에서 따로 가공하지 않고 단순히 보여 주기만 할 모습은 이렇게 children prop을 활용
//단순히 텍스트만 작성하는 걸 넘어서 컴포넌트 안에 컴포넌트를 작성 할 수도 있고 컴포넌트안에 더욱 복잡한 태그 작성 가


//children x 버전

function Button({text}) {
	return <button>{text}</button>;
}

export default Button;


//-----------------------------------------------------

//import Button from './Button';
import Dice from './Dice';

function App() {
	return (
	 <div>
	   <div>
	     <Button text="던지기" />
	     <Button text="처음부터" />
	   </div>
	   <Dice color="red" num={2} />
	 </div>
	);
}

export default App;

//------------------------------------------------------
//children사용버전


function Button({children}) {
	return <button>{children}</button>;
}

export default Button;


//-------------------------------------------------------

//import Button from './Button';
import Dice from './Dice';

function App() {
	return (
	 <div>
	   <div>
	     //장점 부분:그냥 직관적으로 어떤 부분이 출력 될것인지 알 수 있다
	     //만약 컴포넌트 안에 작성된 텍스트를 다루고 싶으면 props.children으로 하면 됨
	  
	     <Button>던지기</Button>
	     <Button>처음부터</Button>
	   </div>
	   <Dice color="red" num={2} />
	 </div>
	);
}

export default App;










