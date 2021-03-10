/*Написать функцию которая переделывает строку с camelCase в snake_case
solution("redevCourses") -> "redev_courses"*/

let snakeCase = str => str.replace(/[A-Z]/g, (match, offcet) => offcet == 0? match.toLowerCase() : "_" + match.toLowerCase());

console.log(snakeCase("redevCourses"));
console.log(snakeCase("rEdEvCOurses"));
console.log(snakeCase("RedevCourses"));
console.log(snakeCase("RedevCourseS"));