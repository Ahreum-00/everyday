// 찾는다: 첫 번재 course-card
const card = document.querySelector(".course-card");

// 기다린다: 클릭되면 { } 안을 한다
card.addEventListener("click", function () {
    //바꾼다: selected를 붙였다 뗐다
    card.classList.toggle("selected");
})
