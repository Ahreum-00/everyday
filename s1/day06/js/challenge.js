const products = [
  { name: "노트북", price: 1200000, stock: 3 },
  { name: "마우스", price: 30000, stock: 0 },
  { name: "키보드", price: 80000, stock: 5 },
  { name: "모니터", price: 300000, stock: 0 },
  { name: "USB", price: 15000, stock: 12 },
];

products.forEach((course) => {
  console.log(`${course.name}: ${course.price}원`)
})

const productNames = products.map((course) => course.name);

console.log(productNames.length);
console.log(productNames[4]);

const openCourses = products.filter((p) => p.stock === 0);

console.log(openCourses.length);
console.log(openCourses[0].name);

const db = products.find((p) => p.price === 80000);

console.log(db.name);

const total = products.reduce((sum, p) => sum + p.stock, 0);
console.log(total);

console.log(products.some((p) => p.price >= 1000000));
console.log(products.every((p)=> p.stock >= 0));

const useProduct = products
  .filter((p) => p.stock > 0)
  .reduce((sum,p) => sum + p.price * p.stock, 0);

console.log(`재고 금액: ${useProduct}원`);

products.sort((a,b) => a.price - b.price);
console.log(products[0].name);
console.log(products[products.length-1].name);

const useStock = products
  .filter((p)=> p.stock > 0)
  .map((p)=> p.name);

  console.log(useStock.join(","));

const exTotal = products
  .reduce((max, p) => (max.price < p.price ? p : max), products[0]);

console.log(exTotal.name);

console.log(productNames.includes("마우스"));
console.log(productNames.includes("태블릿"));

const costPrsent = products.map((p) => p.price + p.price / 10);
console.log(costPrsent[0]);


const costTotal = costPrsent.reduce((sum, p) => sum + p,0);
console.log(costTotal);