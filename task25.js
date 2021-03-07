/*Напишите функцию capitalizeFirstLetter(str), которая преобразоввывает
первый символ строки в нижний регистр.

let str="Пример строки";

function capitalizeFirstLetter(str) {};

capitalizeFirstLetter(str)*/

let str="Пример строки";

let capitalizeFirstLetter = str => str[0].toLowerCase() + str.slice(1);

console.log(capitalizeFirstLetter(str));