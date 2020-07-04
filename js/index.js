let arr = [];

var imagechange = "";
var html="";

async function getImg(){
    await fetch("/api")
    .then((res)=> res.json())
    .then(dat => {
        let i=1;
      dat.forEach(e  => {
          arr.push(e);
          html += '<div class="gallery_pt"><img id= \'' +i+'\' src=\' '+ e + '\'</></div>'
          i++;
      })
      
      document.getElementById("img").innerHTML = html;
      for(let j=1;j<=dat.length;j++){
            document.getElementById(j.toString()).addEventListener('click',function (e){
                var selected = e.target;
                imagechange = selected.src;
                
                console.log(imagechange);
            });
      }
      return arr;
    })
}
getImg();
var grid = document.querySelector(".canvas");
var it;

var selected = null;

function itemClick(e) {
    if (selected != null) {
        selected.className = "grid-item empty";
    }
    console.log(imagechange);
    selected = e.target;
    selected.className = 'grid-item fill';
    selected.textContent = "";
    selected.style.backgroundImage = 'url('+imagechange+')';
    selected.style.backgroundSize = "50px 50px";
    selected.style.backgroundRepeat="round";
    return e.target.id;
}
for (it = 0; it < 16 * 9; ++it) {
    var element = document.createElement("div");
    element.textContent = "";
    element.id = "el-" + it.toString(); 
    element.className = "grid-item fill";
    element.addEventListener("click", itemClick);
    grid.appendChild(element);
}
function btnRemoveClick() {
	if (selected == null) {
		return;
	}
    imagechange = '';
    selected.c
}
var items = document.querySelectorAll('.grid-item');

var bt = document.getElementById("btn");
async function exClick(){
    // items.forEach(e=>e.className="grid-item empty");
    html2canvas(document.querySelector(".canvas")).then(canvas => {
        var imgData = canvas.toDataURL("image/png");
        var newData = imgData.replace(/^data:image\/png/, "data:application/octet-stream");
        window.location.href=newData;
    });
    // items.forEach(e=>e.className="grid-item fill");
};