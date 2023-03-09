// jQuery Cookie - 라이브러리를 이용한 JS쿠키
// 다른 JS 쿠키 관련 라이브러리 사용법 비슷하다.

// cookie 읽기
const getCookie = function () {
  const allCookies = document.cookie;
  console.log(allCookies);

  if (allCookies != "") {
    alert("저장된 쿠키의 값은 : " + allCookies);
  } else {
    alert("저장된 쿠키가 없습니다.");
  }
};

// [1] cookie생성 -> jQuery Cookie
$.cookie("userid", "superman1004");

// [2] cookie생성 -> 만료일 지정
$.cookie("username", "batman", { expires: 7 });

// [3] cookie생성 -> 만료일 지정 및 패스 지정(보통 default '/' -> 사이트 전체에서 유효)
// 주의! 삭제시에도 패스 지정 필요하다.
$.cookie("uid", "antman", { expires: 7, path: "/" });

// [4] cookie읽기
console.log($.cookie("userid")); // superman1004
console.log($.cookie("uadsaf")); // undefined

// [5] 모든 cookie읽기
console.log($.cookie()); // 객체 형태로 출력 {cname: 'cvalue', cname2: 'cvalue2'...}

// [6] cookie삭제하기
$.removeCookie("userid"); // boolean값이 반환된다. -> true
$.removeCookie("uadsaf"); // boolean값이 반환된다. -> false

// [7] cookie생성시 domain, path지정과 함께 생성되었다면 삭제시에도 똑같이 필요.
console.clear();
$.cookie("dogid", "ddd1004", { expires: 7, path: "/" });
console.log($.removeCookie("dogid")); // false
console.log($.removeCookie("dogid", { path: "/" })); // true
