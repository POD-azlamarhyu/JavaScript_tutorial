function isPrimeNumber(number){
    let count=0;
    let bool;
    for(let i=1;i<=number;i++){
        if(number % i === 0){
            count += 1;
        }
    }
    bool = (count === 2) ? true : false;
    return bool;
}

function main1(){
    const number = document.getElementById("text1").value;
    let bool = isPrimeNumber(number);
    const para1=document.getElementById("para1");
    console.log(number);
    para1.innerHTML=` ${number} は ${bool ? "素数である" : "素数ではない"}`;
}