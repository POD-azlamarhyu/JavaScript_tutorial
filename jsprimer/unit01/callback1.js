function blockTime(timeout){
    const starttime = Date.now();
    while(true){
        const difftime=Date.now()-starttime;
        if(difftime>=timeout){
            return;
        }
    }
}

console.log("1.settime");
setTimeout(()=>{
    console.log("3.");
    blockTime(1000);
    console.log("4");
},150);

console.log("2");