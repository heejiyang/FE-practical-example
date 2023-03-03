window.onload = () => {
  // panelFaqComtainer
  const panelFaqComtainer = document.querySelectorAll(".panel-faq-container");
  console.log(panelFaqComtainer); // NodeList 객체

  // panelFaqAnswer
  let panelFaqAnswer = document.querySelectorAll(".panel-faq-answer");
  // console.log(panelFaqAnswer);

  // btn-all-close
  const btnAllClose = document.getElementById("btn-all-close");
  console.log(btnAllClose);

  // 반복문 순회하며 해당 FAQ제목 클릭시 콜백처리
  for (let i = 0; i < panelFaqComtainer.length; i++) {
    panelFaqComtainer[i].addEventListener("click", function () {
      // 클릭시 처리할 일
      console.log("나 클릭했음!!" + i);

      // FAQ 제목 클릭시 본문 보이게끔 active클래스 추가
      // this.classList.add("active"); // 여기서 this는 container
      panelFaqAnswer[i].classList.add("active");
    });
  }
  btnAllClose.addEventListener("click", function () {
    console.log("모두 닫기 버튼 클릭..");

    // 버튼 클릭시 처리할 일
    for (let i = 0; i < panelFaqAnswer.length; i++) {
      panelFaqAnswer[i].classList.remove("active");
    }
  });
};
