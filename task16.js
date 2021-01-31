/*Напиши функцию, которая принимает строковый параметр и меняет 
буквы в словах в обратном порядке. Все пробелы в строке должны 
быть сохранены.
This is an example! -> sihT si na !elpmaxe*/


let stringReverse = function(string) {
    let result = string.split(" ").map(item => item.split("").reverse().join(""));
    console.log (result.join(" "));
}

stringReverse("This is an example!");
