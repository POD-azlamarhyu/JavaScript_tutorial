function blockTime(timeout){
    const startTime=Date.now();
    while(true){
        const difftime = Date.now()-startTime;
        if(difftime >= timeout){
            return;
        }
    }
}

console.log("start tranzaction")
blockTime(2000);
console.log("block 2000ms");