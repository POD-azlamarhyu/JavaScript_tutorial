"use strict";
const person = {
    name:"竹中檀蔵",
    call: function(){
        return this.name;
    }
}

console.log(person.call());
const say = person.call;
say();