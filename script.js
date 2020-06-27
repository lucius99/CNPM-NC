var grid = document.querySelector(".canvas");
var it;

var selected = null;

function itemClick(e) {
    if (selected != null) {
        selected.className = "grid-item empty";
    }
    selected = e.target;
    selected.className = 'grid-item fill';
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