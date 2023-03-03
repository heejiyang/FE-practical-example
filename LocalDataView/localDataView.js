// 로컬스토리지 데이터 값들 출력하기
window.onload = () => {
  // 버튼 가져오기
  const btnAllView = document.querySelector(".btnAllView");
  console.log(btnAllView);

  // 버튼 클릭 시 -> 할 일 처리
  btnAllView.addEventListener("click", () => {
    // 할 일 처리 -> 로컬 스토리지 데이터 값들을 가져와서 출력.
    // const getData = localStorage.getItem("background-color");
    // console.log(getData);

    // key만 출력하기
    // console.log(localStorage.key(0)); // userId

    // key가 몇개인지? -> length
    // console.log(localStorage.key.length);

    // ----------------------------------------------------------
    // 배열 정보를 동적으로 테이블 생성하여 tbody에 삽입하기
    let ar = new Array();
    let result = "";

    ar.push({
      name: "홍길동",
      email: "hong@hong.com",
      age: 26,
      pastime: "음악감상",
    });
    ar.push({
      name: "이순신",
      email: "lee@lee.com",
      age: 44,
      pastime: "영화보기",
    });
    ar.push({
      name: "강감찬",
      email: "kang@kang.com",
      age: 50,
      pastime: "걷기",
    });
    ar.push({
      name: "김유신",
      email: "kim@kim.com",
      age: 18,
      pastime: "야식먹기",
    });
    ar.push({
      name: "광개토대왕",
      email: "kwang@kwang.com",
      age: 98,
      pastime: "독서",
    });

    // 반복문 순회하면서 배열의 정보를 result변수에 누적
    for (const i in ar) {
      result += "<tr>";
      result += "<td>" + ar[i].name + "</td>";
      result += "<td>" + ar[i].email + "</td>";
      result += "<td>" + ar[i].age + "</td>";
      result += "<td>" + ar[i].pastime + "</td>";
      result += "</tr>";
    }
    let hTbody = document.getElementById("htmlTbody");
    console.log(hTbody);
  });
};
