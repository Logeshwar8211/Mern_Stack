const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,'HTML')));
app.use(express.static(path.join(__dirname,'CSS')));
app.use(express.static(path.join(__dirname,'Java Script')));


app.get('/', async(req,res) => {
    res.sendFile(path.join(__dirname,'HTML','index.html'));
});




app.listen(3000, ()=> {
    console.log("Server is running at http://localhost:3000");
});