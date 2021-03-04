const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname,'../chirps.json')

fs.readFile(dataPath,(err,data)=>{
    let chirp = JSON.parse(data)
    chirp.forEach(element => {
        console.log(element.member)
        console.log(element.message)
        
    });
})