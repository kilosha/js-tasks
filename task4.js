/*accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"*/


let accum = str =>  str
    .split("")
    .map((item, index) => item = item.toUpperCase() + item.toLowerCase().repeat(index))
    .join("-");

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));