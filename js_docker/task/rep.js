let pattern = new RegExp("/\s+/");
let str = "abcdefg";
console.log(str.match(pattern));

pattern = /[a-z]/;
str="Google amazon facebook apple";

console.log(str.match(pattern));
console.log(pattern.exec(str));

pattern = /^\[a-z\]/;
console.log(pattern.test(str));

pattern = /\[a-z\]$/;
console.log(pattern.test(str));

pattern = /[a-z]+/;
console.log(pattern.test(str));

pattern = /[a-z]+\d+/
console.log(pattern.test(str));

pattern = /\d/;
console.log(pattern.test(str));