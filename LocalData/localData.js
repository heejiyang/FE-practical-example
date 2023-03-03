window.onload = () => {
  // SetData 버튼
  const btnSLD = document.querySelectorAll(".btnSetLocalData");
  console.log(btnSLD);

  // Input 텍스트 값
  const input = document.querySelectorAll("input");

  // Set Data 버튼 클릭 시
  btnSLD.addEventListener("click", () => {
    // 할 일 처리 -> 입력한 텍스트 값 가져오기
    const inputValue = input.value;
    console.log(inputValue);
  });
};

// 브라우저 로컬 데이터에 저장하기
// 주요 메서트 2개
// 값 저장하기 localStorage.setItem('key', value)
// 값 가져오기 localStorage.getItem('key')
// 키를 그대로 놓고 새로운 값을 저장하면 덮어쓰기가 되면서 기존 로컬 데이터 정보가 수정.
