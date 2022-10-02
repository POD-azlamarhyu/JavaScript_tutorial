const userid = "js-primer-example";
const fetch = require("node-fetch");
fetch(`http://api.github.com/users/${encodeURIComponent(userid)}`)
    .then(response=>{
        console.log(response.status);
        return response.json().then(userInfo=>{
            console.log(userInfo);
        });
    });