//npm init react-app:create-react-app이라는 도구를 통해서 새로운 리엑트 프로젝트를 생성하는 명령
//npm run start:개발자 모드 실행(파일을 수정하고 저장할 때마다 브라우저에 바로바로 반영해주는 기능)

//ctrl+c:개발 모드 종료

//만약 프로젝트를 다운받아 실행한다면
//npm install를 입력

import ReactDOM from 'react-dom';

ReactDOM.render(<h1>안녕 리엑트!</h1>, document.getElementById('root'));

//리액트에서는 render(화면을 그린다 라는 뜻)메소드로 HTML태그를 만들어 준다
//아규먼트값으로 순수한 문자가 아닌 h1태그인데 이 부분은 순수한 자바스크립트 코드는 아니고
//리액트에서 지원하는 JSX라는 문법이다

//ReactDOM.render메소드는 첫 번째 아규먼트 값을 활용해서 HTML 요소를 만들고 두 번째 아규먼트 값에 그 요소를 넣어 주는 역할을 함
//참고로 보통 render메소드는 index.js파일에서 한번만 실행한다



