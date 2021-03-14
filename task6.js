/*На фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, 
которые для простоты названы буквами от a до m.
Цвета, используемые принтером, записываются в управляющую строку. Например, «хорошая» управляющая строка будет 
aaabbbbhaijjjm, что означает, что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а 
затем один раз цвет a ...

Иногда возникают проблемы: возникает недостаток цветов, техническая неисправность и «плохая» контрольная строка, 
например aaaxbbbbyyhwawiwjjjwwm с письмами не от а до м.

Вы должны написать функцию printer_error, которая для данной строки будет выводить коэффициент ошибок принтера в виде 
строки, представляющей рациональное число, числитель которого равен числу ошибок, а знаменатель - длине управляющей строки. 
Не уменьшайте эту дробь до более простого выражения.

Строка имеет длину, большую или равную единице, и содержит только буквы от a до z.
*/

let printer_error = function (str) {
    let errorCount = 0;
    if (str.length > 0 && str.match("^[a-z]+$")) {
       for (let char of str) {
           if (char> "m") {
                errorCount++;
           }
       }
    return (`${errorCount}/${str.length}`);   
    }  else return -1;
}

console.log(printer_error("aaabbbbhaijjjm"));
console.log(printer_error("aaaxbbbbyyhwawiwjjjwwm"));
console.log(printer_error("aaaxzxwbbbbyyhwawiwjjjwwm"));
console.log(printer_error(""));
console.log(printer_error("AAA"));
console.log(printer_error("124as"));
