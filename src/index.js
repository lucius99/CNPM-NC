const express = require('express');
var path = require('path');
const app = express()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
app.use(express.static(path.join(__dirname,"..")));

app.get("/",(req,res)=>{
    filePath = path.join(__dirname,"..","index.html");
    res.sendFile(filePath);
})