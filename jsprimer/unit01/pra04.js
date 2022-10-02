const str1 = /abcde/
// const reg = new RegExp("abcde","de");

// console.log(reg);

const str = "abcdefghijklmn";
const reg1 = /^b/;
console.log(reg1.test(str));

const people = {
    fullName : "bob",
    sayName:function(){
        return this.fullName;
    }
}

console.log(people.sayName());