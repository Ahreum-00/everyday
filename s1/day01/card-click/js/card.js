// 찾는다: 첫 번재 course-card
const card = document.querySelectorAll(".course-card");

// 기다린다: 클릭되면 { } 안을 한다
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function () {
    card[i].classList.toggle("selected");
  });
}