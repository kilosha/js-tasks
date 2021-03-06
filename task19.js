/*Твоя задача посчитать спрятанных на заднем дворе кошек (представленных в двухмерном 
формате Array)
Кошка хорошо прячутся, но их уши (''^^") хорошо видны. Твоя задача реализовать функцию 
(countCats), которая будет считать кошек. Удачи!
Количество найденых кошек должны быть number. Если кошек не найдено, функция должна
вернуть 0

Пример
countCats([0,1,"^^"],[9,"^^",2],["^^",8,7])*/

let countCats = arr => arr.map(item => item.filter(item => item == "^^").length).reduce((sum, current) => sum + current, 0);

console.log(countCats([[0,1,"^^"],[9,"^^",2],["^^",8,7]]));
console.log(countCats([[0,1],[9,7,2],[15,8,7]]));
console.log(countCats([[0,1,"^^",0,1,"^^",],[9,"^^",2],["^^",8,7]]));
console.log(countCats([[0,1,"^^",0,1,"^^",],[9,1,2],["^^",8,7]]));
