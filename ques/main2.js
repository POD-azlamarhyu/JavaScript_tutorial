function main2(){
    const btn = document.getElementsByName("radiobtn");
    let val;
    for(let i=0;i<btn.length;i++){
        if(btn[i].checked === true){
            val=btn[i].value;
        }
    }

    confirm(`あなたは${val}が好きなんですね！`);
}