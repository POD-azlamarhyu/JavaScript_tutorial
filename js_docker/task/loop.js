let x = 1;
while(x < 100){
    console.log(x);
    x += 1;
}

for(let i = 0; i <= 100;i++){
    console.log(i);
}

for(let k = 0;k <= 120;k++){
    if(k % 11 === 5){
        console.log(k);
        break;
    }
}

function isOdd(number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}

for(let l = 0;l <=100;l++){
    if(isOdd(l) === false){
        continue;
    }else{
        console.log(l);
    }
}