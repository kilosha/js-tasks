/*
Функция принимает число n (n> 0), чтобы вернуть обратную последовательность от n до 1
Например n = 5 на выходе у тебя должно быть 5,4,3,2,1*/

let reverseSequence = function (number) {
    if (number>0) {
        for (let i = number; i>0; i--) {
        console.log(i);
        }
    } else {
        console.log ("Некорректное число");
    }
}

reverseSequence(5);
reverseSequence(0);
reverseSequence(-5);