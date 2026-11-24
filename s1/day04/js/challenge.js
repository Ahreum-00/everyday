 const toWon = (n) => n + "원";

 console.log(toWon(1500));

 
const discount = (price, percent) => price - price * percent / 100;

console.log(discount(10000, 10));


const shipping = 3000;
function withShipping(price) {
    return price + shipping;
}

console.log(withShipping(9000));


const isFree = (price) => price >= 50000;

console.log(isFree(30000));
console.log(isFree(50000));


function finalPrice(price) {

 if (isFree(discount (price,10))) {
    return discount(price,10);
  } 
    return withShipping(discount(price,10));
}

console.log(finalPrice(20000));
console.log(finalPrice(60000));


const myPrices = [12000, 8000, 30000];

const sumPrices = (prices) => {
    let total = 0;
    for (let i = 0; i < prices.length; i++){
       total = total + prices[i];
    }
    return total;
}
console.log(sumPrices(myPrices));


const formatOrder = (prices) => prices.length + "개 / " + toWon(sumPrices(prices));
console.log(formatOrder(myPrices));


const addTax = (price) => price + price / 10;
console.log(addTax(20000));


let count = 0;

const addCount = () => { count++;
return count;
};

console.log(addCount());
console.log(addCount());
console.log(addCount());



const maxPrices = (prices) => {
    let max = prices[0];

    for (let i = 0; i < prices.length; i++){
      if (max < prices[i]){max = prices[i];
      }
    }
    return max;
}

console.log(maxPrices(myPrices));

const applyTwice = (fn, n) => fn(fn(n));

console.log(applyTwice(addTax, 10000));