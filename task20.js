/* Найти факториал 5*/

let factorial = function (n) {
    let factorial=1;
    for (let i = n; i>=1; i--){
        factorial*=i;
    }
    return factorial;
}

console.log(factorial(5));