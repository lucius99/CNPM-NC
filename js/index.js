let arr = [];

var html="";

async function getImg(){
    await fetch("/api")
    .then((res)=> res.json())
    .then(dat => {
      dat.forEach(e  => {
          arr.push(e);
          html += '<div class="col-lg-4 col-md-4 col-sm-6 col-6"><div class="gallery_pt"><img src=\' '+ e + '\'</></div></div>'
      })
      document.getElementById("img").innerHTML = html;
      return arr;
    })
}
