// 로컬스토리지 데이터 값들 출력하기
window.onload = () => {
  // 버튼 가져오기
  const btnAllView = document.querySelector(".btnAllView");
  console.log(btnAllView);

  // 버튼 클릭 시 -> 할 일 처리
  btnAllView.addEventListener("click", () => {
    // 할 일 처리 -> 로컬 스토리지 데이터 값들을 가져와서 출력.
    const getData = localStorage.getItem("background-color");
    console.log(getData);
    // key만 출력하기
    console.log(localStorage.key(0)); // userId
    // key가 몇개인지? -> length
    console.log(localStorage.key.length);

    // ----------------------------------------------------------
    // 배열 정보를 동적으로 테이블 생성하여 tbody에 삽입하기
    /*
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

    // Append 해준다.(jQuery방법)
    // $("#htmlTbody").empty();
    // $("#htmlTbody").append(result);

    // Append 해준다.(JS방법)
    // hTbody.append(result); // 텍스트 문자열 형태로 Append
    // hTbody.appendChild(result); // Node error
    // hTbody.innerText(result); // 괄호가 x
    // hTbody.innerText = result; // hTbody.append(result) 와 같은 결과
    hTbody.innerHTML = result;
    */

    // ----------------------------------------------------------
    // 결과 변수 -> 우선 반복문 쓰지 않고 하나만 출력
    // let result = "";
    // result += "<tr>";
    // result +=
    //   "<td class='align-middle' width = '30%'>" + localStorage.key(0) + "</td>";
    // result +=
    //   "<td class='align-middle' width = '30%'>" +
    //   localStorage.getItem(localStorage.key(0)) +
    //   "</td>";
    // result += "<td><button class='btnRemove btn'>Remove</button></td>";
    // result += "</tr>";
    // console.log(result);
    // let hTbody = document.getElementById("htmlTbody");
    // hTbody.innerHTML = result;

    // ----------------------------------------------------------
    // 키 순회하면서 key:value 값들 출력하기
    console.log("로컬 스토리지 길이 = " + localStorage.length);
    let ar = new Array();
    let result2 = "";

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      console.log(`${key} : ${localStorage.getItem(key)}`);

      // 결과 변수
      result2 += "<tr>";
      result2 += "<td class='align-middle' width='30%'>" + key + "</td>";
      result2 +=
        "<td class='align-middle'>" + localStorage.getItem(key) + "</td>";
      result2 += "<td><button class='btnRemove btn'>Remove</button></td>";
      result2 += "</tr>";

      // 배열에 저장
      ar.push(result2);
    }
    // console.log(ar);

    // Append (붙이기)
    $("htmlTbody").empty();
    $("htmlTbody").append(result2);
  });
};
