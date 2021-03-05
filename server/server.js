const path = require('path');
const fs = require('fs');
const request = require('request')

const dataChirps = path.join(__dirname,'../chirps.json')

fs.readFile(dataChirps,(err,data)=>{
    let chirp = JSON.parse(data)
    chirp.forEach(element => {
        console.log(element.member)
        console.log(element.message)
        
    });
})