window.onload = () => {
  const panelFaqComtainer = document.querySelectorAll(".panel-faq-container");
  console.log(panelFaqComtainer); // NodeList 객체

  // 반복문 순회하며 해당 FAQ제목 클릭시 콜백처리
  for (let i = 0; i < panelFaqComtainer.length; i++) {
    panelFaqComtainer[i].addEventListener("click", function () {
      // 클릭시 처리할 일
      console.log("나 클릭했음!!" + i);
    });
  }
};
