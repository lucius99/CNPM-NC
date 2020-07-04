// console.log(getImg());
getImg().finally(data=>console.log(data));

var grid = document.querySelector(".canvas");
var it;
var selected = null;

function itemClick(e) {
    if (selected != null) {
        selected.className = "grid-item empty";
    }
    selected = e.target;
    //console.log(selected);
    selected.className = 'grid-item fill';
    selected.textContent = "";
    selected.style.backgroundImage = "url('../sprite/Tiles/1.png')"
    console.log(selected.id);
    return e.target.id;
}
for (it = 0; it < 16 * 9; ++it) {
    var element = document.createElement("div");
    element.textContent = "new";
    element.id = "el-" + it.toString(); 
    element.className = "grid-item empty";
    element.addEventListener("click", itemClick);
    grid.appendChild(element);
}

var items = document.querySelectorAll('grid-item');