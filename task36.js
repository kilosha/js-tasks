/* Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и 
вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 
55639217, то на выход должно быть 5:563:921:7.
function colonOdd (num) {}
colonOdd(55639217) */

let colonOdd = function (num) {
    let arr = num.toString().split("").map(Number);
    let result = [];
    result = arr.map((item,index) => index == 0? item : item%2!==0 && arr[index-1]%2!==0 ? item = ":" + item : item);
    return result.join("");
};

console.log(colonOdd(55639217));