/*
Напишите функцию с двумя параметрами, которая создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6];
function func(arr1,arr2){}
func(array1,array2) // [5,7,9,4,5]
*/


let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6];

let func = function (array1, array2) {
    let arr = array1.map((item, index) => array2[index]? item + array2[index] : item);
    return arr;
}

console.log(func(array1, array2));