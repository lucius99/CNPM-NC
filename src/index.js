const express = require('express');
var path = require('path');
const app = express()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
app.use(express.static(path.join(__dirname,"..")));

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath,(err,files) => {
            if (err) {
                return reject(err);
            }
            var list_image=[];
            files.forEach((image)=>list_image.push(image));
            return resolve(list_image);
        });
    });
}

app.get("/",(req,res)=>{
    filePath = path.join(__dirname,"..","index.html");
    res.sendFile(filePath);
})