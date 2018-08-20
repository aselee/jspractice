// Write a program to calculate the total price of your phone purchase. 
// You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. 
// You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
// After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// Finally, check the amount against your bank account balance to see if you can afford it or not.
// You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," 
// as well as a variable for your "bank account balance.""
// You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.


const spendingThreshold = 200; // spending amount
const taxRate = 0.08; // tax percentage
const phonePrice = 100; // phone price
const accessoryPrice = 9.99; // accessory price

var bankBalance = 300; // bank balance
var amount = 0; // amount variable

// creating function to calculate tax
function calculateTax(amount) {
  return amount * taxRate;
}

// creating function to return string with value decimal point 
function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

// keep buying phone while you stll have money
while(amount < bankBalance) {
// phone price
  amount = amount + phonePrice;

// if amount is less than spending threshold, add accessory 
  if(amount < spendingThreshold) {
    amount = amount + accessoryPrice;
  }
}

// calculating tax
amount = amount + calculateTax(amount);

// total price
console.log("Your purchase: " + formatAmount(amount));

// if amount is greater than bank balance
if(amount > bankBalance) {
  return console.log("Too poor.");
}