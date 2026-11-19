const libraryName = "중앙도서관" ;
let borrowed = 2 ;

console.log(libraryName);
console.log(borrowed);

borrowed = 3 ;
console.log(borrowed);

console.log(typeof "중앙도서관");
console.log(typeof 3);
console.log(typeof true);

const price1 = 12000;
const price2 = 15000;
const price3 = 18000;
const total = price1 + price2 + price3;

console.log(total);
console.log("합계: " + total);
console.log(total / 3);

console.log(borrowed < 5);
console.log(borrowed === 3);
console.log("3" === 3);


const maxBorrow = 5;

if (borrowed < maxBorrow) {
    console.log("더 빌릴 수 있음");
} else {
    console.log("대출 한도");
}

const daysLate = 4;

if (daysLate === 0) {
    console.log("연체 없음")
} else if(daysLate <= 7) {
    console.log("연체 " + daysLate + "일: 경고")
} else {
    console.log("대출 정지")
  }

console.log("더 빌릴 수 있는 책: "+  (maxBorrow-borrowed) +"권");
