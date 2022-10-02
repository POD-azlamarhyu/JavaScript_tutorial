"use strict";

class Myclass{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    plus() {
        return this.x+this.y;
    }

    mainus(){
        return this.x-this.y;
    }
    times(){
        return this.x*this.y;
    }
    div(){
        return this.x+this.y;
    }

    sourface(){
        return this.x*this.y/2;
    }
    expo(){
        return this.x**this.y;
    }
}

const myclass = new Myclass(6,3);
console.log(myclass.div());
console.log(myclass.expo());

class Parent{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
    }

    print(){
        console.log(`x=${this.x} , y=${this.y}, z=${this.z}`);
    }
}



class mathI extends Parent{
    constructor(x,y,z){
        super(x,y,z);
    }

    func1(){
        return this.x*this.y/2;
    }

    func2(){
        return this.x**3;
    }

    func3(){
        let a,b;
        if(this.x<this.y){
            a = this.y;
            b = this.x; 
        }else{
            a = this.x;
            b = this.y;
        }

        let r=a%b;
        while(r != 0){
            a = b;
            b = r;
            r = a%b;
        }
        return b;
    }
    func4(){
        const b = this.func3;
        return this.x*this.y/b;
    }
}

const parent = new Parent(500,250,550);
const child = new mathI(200,800,300);
parent.print();
console.log(child.func2());