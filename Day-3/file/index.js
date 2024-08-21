const fstream = require("fs");

 fstream.writeFile("firstfile.txt","Hello world",(error) =>{
     if(error) throw error;
     console.log("File Suceesfully Written");
 })

fstream.readFile("firstfile.txt","utf-8",(error,data)=>{
    if(error){
        console.log("Error 1 Occurred");
    }
    else{
        console.log(data);
    }
})

