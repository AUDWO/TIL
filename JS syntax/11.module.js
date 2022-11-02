//module

//<index.js>

export function addMenu() {
	console.log('bb')
};

//<printer.js>

import {addMenu} from './index.js'

//만약 import해온 변수이름을 사용할 수 밖에 없는 상황이 온다면
//import해온 변수의 이름을 변경 해주어야 한다

import {title as printerTtile, print} from './printer.js'


//한꺼번에 다루기
//와일드카드문자=*
import * as printerJS from './printer.js';

console.log(printerJS.title);

//-----------------------------

export {title,print};



//default

export default 'codeit';

import {default as codeit} from './java.js'
import codeit from './java.js' (축약형)

//----------------------------------
//여러 대상을 객체 값으로 모아내는 방식
export default {title, print}; //>>>{title:title, print:print} 하나의 객체


// 여러 개의 기능으로 잘게 나누어진 모듈을
// import한 다음 다시 export하는 모듈 파일을 만들 수 있
// (modules.js)
import module1 from './sub-module1.js';
import module2 from './sub-module2.js';
import module3 from './sub-module3.js';

export { module1, module2, module3 };

// index.js
import { module1, module2, module3 } from 'modules.js';