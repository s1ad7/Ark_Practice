function totalPrice (price, tva){
    const total = price + tva;
    return total;

}

const finalePrice = totalPrice(100, 20);
console.log (finalePrice);

function factorial(n){

let result = 1;

for (let n=1; n <= 5; n++){
    result = result * n;
    
}
    console.log(result)

}

console.log(factorial(8))