
var path = require('path');

const fs = require('fs');
const imgPath = path.join(__dirname,"..","sprite","Tiles");

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path,(err,files) => {
            if (err) {
                return reject(err);
            }
            var list_image=[];
            files.forEach((image)=>list_image.push(image));
            return resolve(list_image);
        });
    });
}

module.exports = {
    getfileName:(req,res) =>{
        async function get(){
            let arr = []
            await readFile(imgPath).then(images =>{
                images.forEach(img => {
                    // a = path.join(,img)
                    a = ".."+"/" + "sprite/Tiles/" + img;
                    arr.push(a);
                })
            })
            res.send(arr)
        }
        get();
    }
    
}