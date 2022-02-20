let costs = [200, 300, 150]
let arrLen = costs.length;
let sum = 0;
for (let i=0; i<arrLen;i++)
{
    sum = sum + costs[i]; // sum of all array items, i.e. costs
}
let aver = sum / arrLen; // average cost of product
console.log (sum)
console.log (aver)