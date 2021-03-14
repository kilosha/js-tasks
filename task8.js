/*Напишите функцию, которая возвращает минимальное и максимальное 
количество заданного массива.*/



let minAndMax = arr => {
    arr.sort((a,b)=> a-b);
    return `${arr[0]}, ${arr[arr.length-1]}`;
}

let arr = [20, 11, 90, -1 , 0, -20, 22];

console.log(minAndMax(arr));