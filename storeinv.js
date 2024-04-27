// Object containing items and their prices in USD
const pricesInUSD = {
  item1: 10,
  item2: 20,
  item3: 30,
};

// Function to convert prices from USD to INR
function convertToINR(priceUSD) {
  const exchangeRate = 80;
  return priceUSD * exchangeRate;
}

// Using map to create a new object with prices converted to INR
//object.fromentries is used to convert  key value pair of an array to object
//The Object.entries()  method returns an array of a given object's
const pricesInINR = Object.fromEntries(
  Object.entries(pricesInUSD).map(([item, priceUSD]) => [
    item,
    convertToINR(priceUSD),
  ])
);

// Printing the new object with prices in INR
console.log(pricesInINR);
