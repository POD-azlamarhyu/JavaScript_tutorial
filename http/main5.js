let i = 0;

function main5(){
    let radioval;
    let btn=document.getElementsByName('radiobtn');

    const para5=document.querySelector('#para5');
    for(let i=0;i<btn.length;i++){
        if(btn[i].checked === true){
            radioval= btn[i].value;
            i += 1;
            console.log(i);
        }
    }
    para5.innerHTML=radioval;
}

