function dummyFetch(path){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(path.startsWith("/resource")){
                resolve({body:`Response body of ${path}`});
            }else{
                reject(new Error("NOT FOUND"));
            }
        },1000*Math.random());
    });
}

async function fetchResources(resources){
    const results = [];
    console.log("1");
    resources.forEach(async function(resource){
        console.log(`2. ${resource}`);
        const response = await dummyFetch(resource);
        console.log(`5.${resource}`);
        results.push(response.body);
    });
    console.log("3");
    return results;
}

const resources = ["/resource/A","/resource/B"];
fetchResources(resources).then((results)=>{
    console.log("4.");
    console.log(results);
});