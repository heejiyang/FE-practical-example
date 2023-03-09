// 테이블의 열과 줄을 동적으로 생성하여 삽입하기
window.onload = () => {
  // 버튼 가져오기
  const btnCrc = document.querySelector(".btnCrc");
  console.log(btnCrc);

  // 버튼 클릭 시 -> 할 일 처리
  btnCrc.addEventListener("click", () => {
    // 할 일 처리
    let hTbody = document.getElementById("htmlTbody");
    console.log(hTbody);

    // JavaScript Table row and column.
    // Insert a row at the end of table.
    // htmlTbody에 한 줄 삽입한다. (tr삽입)
    const newRow0 = hTbody.insertRow();

    // Insert a cell at the end of the row.
    // tr사이에 td를 넣는다.
    const newCell0 = newRow0.insertCell();
    const newCell1 = newRow0.insertCell();
    const newCell2 = newRow0.insertCell();
    const newCell3 = newRow0.insertCell();

    // Append - 텍스트 노드를 새롭게 생성한 Cell에 붙이기
    const newText0 = document.createTextNode("홍길동");
    newCell0.appendChild(newText0);
    const newText1 = document.createTextNode("hong@hong.com");
    newCell1.appendChild(newText1);
    const newText2 = document.createTextNode("25");
    newCell2.appendChild(newText2);
    const newText3 = document.createTextNode("영화보기");
    newCell3.appendChild(newText3);

    // 테이블의 row구하기
    const table = document.getElementById("myTable");
    console.log(table.rows.length - 1);
  });
};
