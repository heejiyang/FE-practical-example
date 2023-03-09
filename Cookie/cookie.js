// JS로 cookie 읽기, 생성하기, 삭제하기
// 기본적인 방법 -> document.cookie = "name = ??; name2 = ??; expires = ??; path = ??";

// cookie 읽기
function getCookie() {
  // 로컬에 저장된 cookie 뿌려주기
  const allCookies = document.cookie;
  // 하나의 문자열로 리턴 cookie1 = value; cookie2 = value
  console.log(typeof allCookies); // string

  // if문 사용 -> 쿠기가 있으면
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

  // 날짜를 쿠키로 저장하기 위해 -> UTC방식으로 표기 -> toUTCString() 메서드 사용
  console.log(expiration.toUTCString()); // Sun, 19 Mar 2023 12:41:27 GMT

  // 쿠키 생성하기
  let cookies = "";
  cookies = "userid = superman; expires = expiration.toUTCString()";
  console.log(cookies);

  // 쿠키 저장하기
  document.cookie = cookies;
  alert("쿠키를 생성하였습니다.");
}
