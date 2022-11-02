//module

//<index.js>

export function addMenu() {
	~~~~~
}

//<printer.js>

import {addMenu} from './index.js'

//만약 import해온 변수이름을 사용할 수 밖에 없는 상황이 온다면
//import해온 변수의 이름을 변경 해주어야 한다

import {title as printerTtile, print} from './printer.js'


//한꺼번에 다루기
import * as printerJS from './printer.js';

console.log(printerJS.title);

//-----------------------------

export {title,print};