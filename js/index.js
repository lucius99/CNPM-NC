let arr = [];

var html="";

async function getImg(){
    await fetch("/api")
    .then((res)=> res.json())
    .then(dat => {
        let i=1;
      dat.forEach(e  => {
          arr.push(e);
          
          html += '<div class="col-lg-4 col-md-4 col-sm-6 col-6"><div class="gallery_pt"><img id= \'' +i+'\' src=\' '+ e + '\'</></div></div>'
          i++;
      })
    //   var j;
    //   for(j=1;j<=dat.length;j++){
    //         document.getElementById(j.toString()).addEventListener('click',function (e){
                
    //         });
    //   }
      document.getElementById("img").innerHTML = html;
      var a = document.getElementById('1');
      console.log(a);
      return arr;
    })
}