const empty = new Array();

console.log(empty);

const number = [1,2,3,4,5];

const matrix = [
    [1,2],
    [3,4]
];


console.log(number);
console.log(matrix);

console.log(number.length);

number.forEach(element => {
    console.log(element);    
});

const newary = number.concat(matrix);

console.log(newary);