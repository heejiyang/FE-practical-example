// JS cookie 사용자 정의 함수 및 전체 삭제 만들기

// cookie 읽기
const getCookie = function () {
  // 로컬에 저장된 모든 cookie 읽어오기
  // 하나의 문자열로 리턴
  const allCookies = document.cookie;
  console.log(allCookies);

  // if 조건문 -> cookie있다면
  if (allCookies != "") {
    alert("저장된 쿠키의 값은 : " + allCookies);
  } else {
    alert("저장된 쿠키가 없습니다.");
  }
};

// cookie 생성하기 -> 함수 표현식
const setCookie = function (cookiename, cookievalue, cookieexpire) {
  // submit, href 발생 시, 이동 방지 및 새로 실행되는 것 방지
  event.preventDefault();

  // 넘어온 값 체크
  if (document.getElementById("cookiename").value != "") {
    cookiename = document.getElementById("cookiename").value;
    cookievalue = document.getElementById("cookievalue").value;
    cookieexpire = document.getElementById("cookieexpire").value;
  }
  console.log("cookiename = " + cookiename);
  console.log("cookievalue = " + cookievalue);
  console.log("cookieexpire = " + cookieexpire); // typeof string

  // 만료일 생성 -> 현재에서 30일 간으로 생성 -> setDate()
  let expiration = new Date();
  expiration.setDate(expiration.getDate() + parseInt(cookieexpire));

  // 날짜를 cookie로 저장하기 위해 -> UTC방식 사용
  console.log(expiration.toUTCSting());

  // cookie 생성
  let cookies = "";
  cookies += `${cookiename} = ${cookievalue};`;
  cookies += `expires = ${expiration.toUTCSting()}`;

  // cookie 저장
  document.cookie = cookies;
  // document.getElementById("cookiename").value = "";
  // document.getElementById("cookiename").focus();
  // 한방에 초기화
  document.getElementById("form").reset();
  alert("쿠키를 생성했습니다.");
};

// cookie 삭제하기
const delCookie = function (cookiename) {
  // cookie 삭제는 이미 한참 지나간 시간을 입력해 삭제시킨다.
  // document.cookie = "userid = ; expires = Sat, 01 Jan 1972 00:00:00 GMT";
  alert(cookiename);
  setCookie(cookiename, "", 0);
  alert("쿠키를 삭제했습니다.");
};

// addEventListener
const form = document.getElementById("form");
form.addEventListener("submit", setCookie);
