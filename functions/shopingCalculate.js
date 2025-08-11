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
