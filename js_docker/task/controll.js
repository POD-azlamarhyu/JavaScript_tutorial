const str = "枢木スザク";

if(str.length > 10){
    console.log("10文字より長い");
}else{
    console.log("10文字以下");
}


const year = new Date().getFullYear();

let flag;

if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            flag = "閏年である";        
        }else{
            flag = "閏年ではない";
        }
    }else{
        flag = "閏年である";
    }
}else{
    flag = "閏年ではない";
}

console.log(`${year}は${flag}`);

if((year % 4 === 0 && year % 100 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 != 0)){
    console.log("閏年である")
}

