
let tableHtml = "<table>";
 
for (let i = 1; i <= 3; i++) {
  tableHtml = tableHtml + "<tr>";
  for (let j = 1; j <= 3; j++) {
    tableHtml = tableHtml + "<td>" + i + "-" + j + "</td>";
  }
  tableHtml = tableHtml + "</tr>";
}
 
tableHtml = tableHtml + "</table>";
document.querySelector("#area").innerHTML = tableHtml;

const card = document.querySelector(".course-card");

// 기다린다: 클릭되면 { } 안을 한다
card.addEventListener("click", function () {
    //바꾼다: selected를 붙였다 뗐다
    card.classList.toggle("selected");
})
