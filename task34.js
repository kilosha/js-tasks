/*Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием 
исходной строки str и определяет заканчивается ли строка символами подстроки.

let str = "Каждый охотник желает знать";
let str1 = "скрипт";
let str2 = "знать";

String.prototype.endsWith = function(substring) {};

str.endsWith(str1)) // false
str.endsWith(str2)) // true
*/

String.prototype.endsWith = substring => str.lastIndexOf(substring) != -1;

let str = "Каждый охотник желает знать";
let str1 = "скрипт";
let str2 = "знать";

console.log(str.endsWith(str1));
console.log(str.endsWith(str2));