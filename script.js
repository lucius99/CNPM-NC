var grid = document.querySelector(".canvas");
var i;

var selected = null;

function itemClick(e) {
    if (selected != null) {
        selected.className = "grid-item empty";
    }
    selected = e.target;
    selected.className = 'grid-item fill';
    return e.target.id;
}
for (i = 0; i < 16 * 9; ++i) {
    var element = document.createElement("div");
    element.textContent = "new";
    element.id = "el-" + i.toString(); 
    element.className = "grid-item empty";
    element.addEventListener("click", itemClick);
    grid.appendChild(element);
}

var items = document.querySelectorAll('grid-item');