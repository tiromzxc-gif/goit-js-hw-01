"use strict";
function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));

function getElementWidth(content, padding, border) {
  const totalWidth = content + padding * 2 + border * 2;
  return totalWidth;
}
console.log(getElementWidth(50, 8, 4));
console.log(getElementWidth(60, 12, 8.5));
console.log(getElementWidth(200, 0, 0));
