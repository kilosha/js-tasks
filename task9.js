/*Функция Simple, учитывая строку слов, возвращает длину самого короткого слова.

Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.*/

let simple = function(string) {
    let arr = string.split(" ").map(item=> item.length).sort((a,b)=> a-b);

    return arr[0];
}


console.log(simple("строка в качестве примера"));
console.log(simple("пример номер два"));
console.log(simple("программировать очень интересно"));
