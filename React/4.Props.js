//prop(propertys):JSX문법으로 JSX에 추가한 속성을 말한다


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

function Dice({color, num}) {
	const scr = DICE_IMAGES[color][num-1];
	const alt = '${color} ${num}';
	return <img src={src} alt={alt} />;
}

export default Dice;

