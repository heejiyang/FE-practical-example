// JS로 cookie 읽기, 생성하기, 삭제하기
// 기본적인 방법 -> document.cookie = "name = ??; name2 = ??; expires = ??; path = ??";

// cookie 읽기
function getCookie() {
  // 로컬에 저장된 cookie 뿌려주기
  const allCookies = document.cookie;
  // 하나의 문자열로 리턴 cookie1 = value; cookie2 = value
  console.log(typeof allCookies); // string

  // if문 사용 -> cookie 있으면
  if (allCookies != "") {
    alert(
      "저장된 쿠키의 값은 : " + allCookies + "₩n(다시 방문해주셔서 환영합니다.)"
    );
  } else {
    alert("저장된 쿠키가 없습니다. ₩n(첫 방문을 환영합니다.)");
  }
}

// cookie 생성하기
function setCookie() {
  // 기본적인 날짜 출력 -> 날짜 쓸 일 -> 만료일 -> expiration, expire
  // 로그인 유지 기간 조절 목적으로 쓰이기도 한다.
  // let nowDate = new Date();
  // console.log(nowDate); // type: object

  // 만료일 생성
  // let expiration = nowDate.getDate() + 10;
  // console.log(expiration); // 오늘 날짜 + 10일 뒤

  // 오늘 날짜 -> 10일 뒤 날짜가 나타나도록 생성
  let expiration = new Date();
  expiration.setDate(expiration.getDate() + 10);
  console.log(expiration); // Sun Mar 19 2023 21:41:27 GMT+0900 (한국 표준시)

  // 날짜를 cookie로 저장하기 위해 -> UTC방식으로 표기 -> toUTCString() 메서드 사용
  console.log(expiration.toUTCString()); // Sun, 19 Mar 2023 12:41:27 GMT

  // cookie 생성하기
  let cookies = "";
  cookies = "userid = superman; expires = expiration.toUTCString()";
  console.log(cookies);

  // cookie 저장하기
  document.cookie = cookies;
  alert("쿠키를 생성하였습니다.");
}

// cookie 삭제하기
function delCookie() {
  // document.cookie에 값을 대입하는 형태로 -> cookie삭제
  // 사실상 cookie삭제는 수정하는 것이다. -> 한참 지나간 시간을 입력해 쿠키를 삭제시킨다.
  // cookie생성
  // document.cookie = "username = hongkildong";
  // cookie수정
  // document.cookie = "username = leesoonsin";
  // cookie삭제
  // document.cookie = "username = ; expires = Sat, 01 Jan 1972 00:00:00 GMT";
  document.cookie = "userid = ; expires = Sat, 01 Jan 1972 00:00:00 GMT";
  alert("cookie를 삭제했습니다.");
}

// [!] Summary
// 1. JS에서 cookie를 편리하게 쓰려면 사용자가 직접 함수를 만들어 쓰는 것이 편리하다.
// 2. 더 편리한 것은 JS의 cookie관련 경량 라이브러리를 쓰는 것이 더 편리하다.
// 3. document.cookie가 열일한다.
// 4. cookie 삭제는 한참 지난 날짜를 입력하며 삭제시킨다.
// 5. 일반적으로 Set(생성), Get(읽기), Del(삭제) 3가지의 사용자 함수를 구현해 사용한다.
