function print(Numbers,l=0,r=100){
    for (let i=l;i<r;i++){
        console.log(Numbers[i]);}

}

function Divisible3(){
const Numbers = [];

for (let i = 0; i <=100; i++) {
    Numbers.push(i);
}

for (let i = Numbers.length - 1; i >= 0; i--) {
    if (Numbers[i] % 3 === 0) {
        Numbers.splice(i, 1);
    }
}

print(Numbers,0,Numbers.length);
    
    
}

function AddValuse(){
    const Numbers = [];
    const numbers = [];
    for (let i = 0; i <100; i++) {
        Numbers.push(i);
    }

    for (let i = 100; i <= 150; i++) {
        numbers.push(i);
    }
     Marged_Numbers=Numbers.concat(numbers);
     
print(Marged_Numbers,0,Marged_Numbers.length);
   
}


function Add3(){
    let Numbers =Array.from({length :100},(_,i)=>i+=1);
    Numbers=Numbers.flatMap((x)=>x+3);
    print(Numbers,0,Numbers.length);
}

function   Range20_40(){
    let Numbers =Array.from({length :100},(_,i)=>i+=1);
    print(Numbers,20,40);
}
function ShuffleAndSort(){
    let Numbers =Array.from({length :100},(_,i)=>i+=1);
    shuffleArray(Numbers);
    print(Numbers,0,Numbers.length);
    Numbers.sort(function(a, b){return a<b});
    print(Numbers,0,Numbers.length);

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }




