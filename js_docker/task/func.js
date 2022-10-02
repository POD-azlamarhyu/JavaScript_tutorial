function func1(num1,num2){
    return num1+num2;
}

function func2(str1,str2){
    return str1+str2+str1+str2;
}

function func3(...args){
    console.log(args);
}

let total = func(4,5);
console.log(total);

let str = func2("ジャンプ","マガジン");
console.log(str);

console.log(func1(1,func1(4,6)));

func3("コードギアス","R2","ギアス");

function learn(){
    console.log("復活のルルーシュ");
}
const fn = learn;

