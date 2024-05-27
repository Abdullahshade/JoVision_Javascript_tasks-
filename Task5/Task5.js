function CalacSum(){

const Numbers = [];
let sum = 0;

for (let i = 0; i < 101; i++) {
    Numbers.push(i);
}

for (let i = 0; i < Numbers.length; i++) {
    if(Numbers[i]%2==0){
        sum+=Numbers[i];}
}

console.log("sum:", sum);}
