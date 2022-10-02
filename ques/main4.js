
var img=document.getElementById('img');
img.style.position="absolute";
var div = document.querySelector('div');


setInterval("main4()",1);

var h = img.clientHeight;
var w = img.clientWidth;

var vel=2;
var vw=vel;
var vh=vel;
var x=0+Math.random(screen.width);
var y=div.offsetTop+Math.random(100);

console.log(innerHeight);
console.log(h);
console.log(div.clientHeight);
console.log(window.innerHeight-div.clientHeight);
console.log(screen.height-div.clientHeight);
function main4(){
    if(x+w+10 > screen.width){
        vw=-vel;
    }
    if(x < 0){
        vw=vel;
    }
    if(y+h+24 > window.innerHeight){
        vh = -vel;
    }
    if(y < div.offsetTop){
        vh=vel;
    }

    x += vw;
    y += vh;
    img.style.left=x+"px";
    img.style.top=y+"px";

    // console.log(`vw:${vw}  vh:${vh} x: ${x} y:${y}`);
}

