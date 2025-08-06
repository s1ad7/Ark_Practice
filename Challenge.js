

/*
let num1 = 5;
let result = 1;

for (n=1; n <= 5; n++){
    result = result * n;
    
}
    console.log(result)


function factorial(n){
    let result = 1;

        for (i=1; i <= n; i++){
            result *= i;   
        }
        return result;
}

console.log(factorial(5))

*/

/*

let num = 123542;
let total = 0
for (i=1; i <= num.length; i++){
    total++
    
}
console.log(total);

*/

function nDigits(number) {
    let total = 0;
    for (i=1; i<= number.length; i++){
        total++
    }
    return total;
}
console.log(nDigits('123542'))