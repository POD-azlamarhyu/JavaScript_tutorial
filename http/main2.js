const main=document.querySelector('main');
const par = document.createElement('p');
const ary = makeAry(10);

for(let i=0;i<10;i++){
    console.log(ary[i]);
}
par.textContent=stringAry(ary);
console.log(par);
main.appendChild(par);

function makeAry(x){
    const ary = [];
    for(let i=0;i<x;i++){
        ary[i]=parseInt(Math.random()*(0,100)+1);
    }
    return ary;
}

function stringAry(ary){
    let str="";
    for(let i=0;i<ary.length;i++){
        str += `${ary[i].toString()} `;
    }
    return str;
}