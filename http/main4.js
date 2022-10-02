function main2(){

    const ary4=[];
    const val4=document.getElementsByName('check');
    const para4=document.createElement('p');

    console.log(val4);

    for(let i=0;i<val4.length;i++){
        if(val4[i].checked === true){
            ary4.push(val4[i].value);
        }
    }

    para4.textContent=ary4;
    document.querySelector('.sec1').appendChild(para4);

}