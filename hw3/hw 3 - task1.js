let parsedJSON = require('task1-data.json');
let priceListArr = parsedJSON.data;

const exchangeRateDlrToEur = 1.09;
const exchangeRateStr = 'Exchange Rate'

let source = []
let output = []

for (const item of priceListArr) {
  let sourceObj = JSON.parse(JSON.stringify(item));
  let outputObj = JSON.parse(JSON.stringify(item));
  
  sourceObj[exchangeRateStr] = '$';
  outputObj[exchangeRateStr] = '€';
  outputObj['Prices']['Price'] *= exchangeRateDlrToEur;
  outputObj['Prices']['Retail Price'] *= exchangeRateDlrToEur;
  outputObj['Prices']['Wholesale Price'] *= exchangeRateDlrToEur;
  
  source.push(sourceObj);
  output.push(outputObj);
} 

console.log(source)
console.log(output)