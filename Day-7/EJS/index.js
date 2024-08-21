const express =require('express');

const app=express();

app.set('view engine','ejs');

app.get("/", function(req,res){
    res.render("index",{name:'Logeshwar'});
});
app.listen(3000,()=>{
    console.log("http://localhost:3000");
})