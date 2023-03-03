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
  });
};
