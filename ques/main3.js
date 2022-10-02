const name=document.querySelector('#text2');
const para2=document.getElementById('para2');
const reg=/[a-zA-Z]+\s[a-zA-Z]+/;

name.addEventListener('input',checkreg);
function checkreg(e){
    const frag=reg.test(e.target.value);
    if(frag===true){
        console.log(e.target.value);
        console.log(frag);
        e.target.style.backgroundColor="#CCFFFF";
    }else{
        console.log(e.target.value);
        e.target.style.backgroundColor="red";
        console.log(frag);
    }
}




