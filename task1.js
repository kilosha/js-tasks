/*Вы можете знать несколько довольно больших идеальных квадратов. Но как насчет следующего?
Завершите метод findNextSquare, который находит следующий целочисленный идеальный квадрат после того, 
как передан в качестве параметра. Напомним, что целочисленный совершенный квадрат - это такое целое число n, 
что sqrt (n) также является целым числом.
Если параметр сам по себе не является идеальным квадратом, то должно быть возвращено -1. Вы можете предположить, 
что параметр положительный.

findNextSquare = (sq) => {

return
}
*/

/* 1 вариант
let findNextSquare = function (sq) {
    if (sq > 0 && Number.isInteger(Math.sqrt(sq))) {
        return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1);
    } else return -1;
}
*/

let findNextSquare = sq => sq > 0 && Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1) : -1;

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
console.log(findNextSquare(0));