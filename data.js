


function sum(){
    let num = [5, 4, 1];
    let total = 0;
    for (i=0; i < num.length; i++){
        total = total + num[i];
    }
    return total;
}

console.log(sum())

function date(){
    let num = [5, 4, 1, 2, 6, 7, 10 ,8 , 3];
    let total = 0;
        for (i=0; i < num.length; i++){
            if (num[i] %2 == 0) {
                total = total + num[i];
            }
        }
        
        console.log(total)
}
(date())

function double(){
    let num = [1, 2, 3, 4, 5]
    let total = 0;
    let operation =0;
    for (i=0; i < num.length; i++){
        operation = num[i] * 2;
        total = total + operation;
    }
    return total;
}

console.log(double())



function pairs(){
    let socks = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
    let red = 0;
    let blue = 0;
    let green = 0;
    let total = 0;
    for (i=0; i < socks.length; i++){
            if ( socks[i] == 1){
                red++;
                if (red == 2){
                    total++;
                    red = 0;
                }
            }
            if (socks[i] == 2){
                blue++;
                if (blue == 2){
                    total++
                    blue = 0;
                }
            }
            if (socks[i] == 3){
                green++;
                if (green ==2){
                    total++;
                    green = 0;
                }
            }
    }
    return total;
}
console.log(pairs())