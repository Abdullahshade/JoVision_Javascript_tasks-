function CalacSum(){

const Numbers = [];
let sum = 0;

for (let i = 0; i < 101; i++) {
    Numbers.push(i);
}

sum+=(Numbers[Numbers.length-1]*(Numbers[Numbers.length-1]+1))/2;

console.log("sum:", sum);}
