//Content-Type헤더:현재 request 또는 response의 바디에 들어있는 데이터가 어떤 타입인지를 말해준다

//Content-Type헤더 값은 주 타입가 서브 타입의 형식으로 나타낸다

//주 타입이 text
//일반 텍스트 : text/plain
//CSS 코드 : text/css
//HTML 코드 : text/html
//JavaScript 코드 : text/javascript ...


/*주 타입이 image인 경우(이미지)
image/bmp : bmp 이미지
image/gif : gif 이미지
image/png : png 이미지 ...

주 타입이 audio인 경우(오디오)
audio/mp4 : mp4 오디오
audio/ogg : ogg 오디오 ...

주 타입이 video인 경우(비디오)
video/mp4 : mp4 비디오
video/H264 : H264 비디오 ...*/


/*위 타입들에 속하지 않는 것들은, 보통 application이라고 하는 주 타입에 속한다

주 타입이 application인 경우
application/json : JSON 데이터
application/octet-stream : 확인되지 않은 바이너리 파일 ...
(텍스트 파일 이외의 파일들을 보통 바이너리 파일(binary file))
*/

//Content-type이 필요한 이유:서버에서 바디의 데이터가 어떤 타입인지를 확인하는 절차가 추가적으로 필요해짐 


//Content-type 설정하는방
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeit.kr',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  headers: { // 추가된 부분
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });