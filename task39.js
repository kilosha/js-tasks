/*
Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.

let arr1 = [1, [2,[3,[4]]]];

let arr2 = [1, [2], [3, [[4]]],[5,6]];

function expand(arr) {}

expand(arr1); // 1,2,3,4
expand(arr2); // 1,2,3,4,5,6
*/


// 1 вариант
let expand = arr => {
    let newArr = [];
    arr.forEach (item => Array.isArray(item)? newArr = newArr.concat(expand(item)) : newArr.push(item));
    return newArr;
}

// 2 вариант
let expand2 = arr => arr.flat(Infinity);


let arr1 = [1, [2,[3,[4]]]];
let arr2 = [1, [2], [3, [[4]]],[5,6]];

console.log(expand(arr1));
console.log(expand(arr2));
console.log(expand2(arr1));
console.log(expand2(arr2));