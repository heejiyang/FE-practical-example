// JS cookie 사용자 정의 함수 및 전체 삭제 만들기

// cookie 읽기

// cookie 생성하기 -> 함수 표현식
const setCookie = function (cookiename, cookievalue, cookieexpire) {
  // 할 일 처리

  // submit, href 발생 시, 이동 방지 및 새로 실행되는 것 방지
  event.preventDefault();

  // 넘어온 값 체크
  cookiename = document.getElementById("cookiename").value;
  console.log(cookiename);
};

// addEventListener
const form = document.getElementById("form");
form.addEventListener("submit", setCookie);
