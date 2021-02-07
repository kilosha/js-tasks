/*Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.
let vegetables = ['Капуста', 'Репа', 'Редиска'];
function arrayClone(arr) {}*/


let arrayClone = arr => arr.slice();

let vegetables = ['Капуста', 'Репа', 'Редиска'];

let arr2 = arrayClone(vegetables);
arr2[1] = "Огурец";
console.log(vegetables);
console.log(arr2);
