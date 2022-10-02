const img2=document.getElementById('img2');
let btn1=document.getElementById('btn1');
let btn2=document.getElementById('btn2');
let size=img2.clientWidth;
let dsize=10;

function func1(){
    if(img2.style.visibility=="visible"){
        img2.style.visibility="hidden";
        btn1.value="画像を表示";
    }else if(img2.style.visibility=="hidden"){
        img2.style.visibility="visible";
        btn1.value="画像を非表示";
    }
}

function func2(){
    size += dsize; 
    img2.style.width = size+"px";
}

function func3(){
    size -= dsize;
    img2.style.width=size+"px";
}