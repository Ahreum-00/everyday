const book = {
  title: "자바스크립트 입문",
  price: 25000,
  author: "김코딩",
};

const { title, price } = book;
console.log(title);
console.log(price);

const arr = [3, 7, 1];

const [a, b, c] = arr;
console.log(a+b+c);

function label({ title, price }) {
  return `${title} - ${price}원`;
}
console.log(label(book));

const discounted = { ...book, price: 20000 };

console.log(book.price);
console.log(discounted.price);

const fruit = ["사과", "배"]
const jeju = ["귤"]

const all = [...fruit, ...jeju];

console.log(all.length);
console.log(all[2]);

const text = JSON.stringify(book);
console.log(typeof text);

const back = JSON.parse(text);
console.log(back.author);

const memo = ["장보기","운동"];
localStorage.setItem("memo", JSON.stringify(memo));

const saverd = JSON.parse(localStorage.getItem("memo"));

console.log(memo.length);
console.log(saverd[0]);

const visitText = localStorage.getItem("visits");
const count = Number(visitText) +1;
localStorage.setItem("visits", count);

console.log(`도전 페이지 ${count}번째 방문`);

const books = [ book,
   {title: "리액트 기초", price: 30000, author: "이리액"}];

const titles = books.map(({ title }) => title).join(", ");
console.log(titles);

const addBook = (list, newBook) => [...list, newBook];

const newBook = addBook(books, { title: "뷰 입문", price:22000});

console.log(books.length);
console.log(newBook.length);

localStorage.setItem("books",JSON.stringify(books));
const saveBooks = JSON.parse(localStorage.getItem("books"));

const totlaBook = saveBooks.reduce((sum, p) => sum + p.price,0);
console.log(totlaBook);

const favBook = {...book, fav: true};

console.log(book.fav);
console.log(favBook.fav);