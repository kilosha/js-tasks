/*Напишите функцию isUpperCase(str, character), которая определяет в каком регистре написан символ 
строки в указанной позиции. Если в верхнем регистре выводится – true, если в нижнем – false.

function isUpperCase(str, character) {};

isUpperCase('tasks JavaScript', 6); // true
*/


let inUpperCase = (str, character) => "A"<=str[character] && str[character]<="Z";

console.log(inUpperCase('tasks JavaScript', 6));