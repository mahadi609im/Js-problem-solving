function calculateTotal(shirtQuantity, pentQuantity, shoeQuantity) {
  let shirt = 500;
  let pent = 300;
  let shoe = 1000;

  let shirtPrice = shirt * shirtQuantity;
  let pentPrice = pent * pentQuantity;
  let shoePrice = shoe * shoeQuantity;

  let totalAmmount = shirtPrice + pentPrice + shoePrice;
  return totalAmmount;
}

console.log(calculateTotal(1, 3, 1));


let products = [
  { id: 1, name: 'Mouse', price: 500, quantity: 3},
  { id: 2, name: 'Keyboard', price: 1200, quantity: 0},
  { id: 3, name: 'Monitor', price: 8000, quantity: 5},
  { id: 4, name: 'USB Cable', price: 150, quantity: 2},
  { id: 5, name: 'Laptop Stand', price: 700, quantity: 0},
  { id: 6, name: 'Webcam', price: 2500, quantity: 0},
  { id: 7, name: 'Headphones', price: 1800, quantity: 2},
  { id: 8, name: 'Microphone', price: 3500, quantity: 3},
  { id: 9, name: 'Charger', price: 300, quantity: 1},
  { id: 10, name: 'Desk Lamp', price: 1200, quantity: 0},
];

function productsShopingCart(productsList) { 
   let totalPrice = 0
   for (let i of productsList) {
      let productPrice = i.price * i.quantity;
      totalPrice += productPrice
   }
   return totalPrice
}

let totalAmmount = productsShopingCart(products)
console.log(totalAmmount)