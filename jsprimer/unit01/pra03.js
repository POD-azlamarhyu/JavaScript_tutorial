function func(val1,val2){
    return val1*val2;
}

const val = func(3,12);

console.log(val);

const ary = [1,2,3,4,5,6];
ary.forEach(val =>{
    console.log(val);
})

const obj = {
    "a":1,
    "b":2,
    "c":3
};

for(const key in obj){
    const value = obj[key];
    console.log(`key:${key} , value:${obj[key]}`);
}

for(const val4 of ary){
    console.log(val4);
}

const str = "竹中平蔵";
for(const val3 of str){
    console.log(val3);
}