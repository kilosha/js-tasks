/*Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её 
символы в алфавитном порядке.

function alphabetize(str) {};

alphabetize("Europe")*/


let alphabetize = str => str.split("").sort().join("");

console.log(alphabetize("Europe"));
