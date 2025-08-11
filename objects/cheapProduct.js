let products = [
  { id: 1, name: 'Mouse', price: 500 },
  { id: 2, name: 'Keyboard', price: 1200 },
  { id: 3, name: 'Monitor', price: 8000 },
  { id: 4, name: 'USB Cable', price: 150 },
  { id: 5, name: 'Laptop Stand', price: 700 },
  { id: 6, name: 'Webcam', price: 2500 },
  { id: 7, name: 'Headphones', price: 1800 },
  { id: 8, name: 'Microphone', price: 3500 },
  { id: 9, name: 'Charger', price: 300 },
  { id: 10, name: 'Desk Lamp', price: 1200 },
];

function findCheapProduct(products) {
  let cheapItem = products[0];
  for (let i of products) {
    if (i.price < cheapItem.price) {
      cheapItem = i;
    }
  }
  return cheapItem;
}

let cheapProduct = findCheapProduct(products);
console.log(cheapProduct);
