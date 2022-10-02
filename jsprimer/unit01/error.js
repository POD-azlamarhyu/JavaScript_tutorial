setTimeout(()=> {
    try{
        throw new Error("errorrrrrrrrr");
    }catch(error){
        console.log('catching error');
    }
},1001);

console.log("running!");