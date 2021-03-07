/*Такая вот задача.

Удалить из одного массива все элементы второго массива.

arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/


let arrayDiff = (arr1,arr2) => arr1.filter(item => !arr2.includes(item));


console.log(arrayDiff([1,2],[1]));
console.log(arrayDiff([1,2,2,2,3],[2]));
console.log(arrayDiff([1,2,2,2,3],[4]));